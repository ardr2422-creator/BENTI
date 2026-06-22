# =========================================================================
# Kayani Kitchen — Installe le démarrage automatique 24/7 du serveur statique.
# - En administrateur : tâche au démarrage de Windows, compte SYSTEM (24/7 même
#   sans session ouverte).
# - Sans admin : tâche à l'ouverture de session (démarre à chaque connexion),
#   avec repli sur le dossier Démarrage si la création de tâche est refusée.
# Le serveur se relance automatiquement en cas d'arrêt inattendu.
# =========================================================================
$ErrorActionPreference = "Stop"

$proj   = Split-Path -Parent $PSScriptRoot
$server = Join-Path $proj "server.js"
$vbs    = Join-Path $proj "start-server-hidden.vbs"
$node   = (Get-Command node -ErrorAction SilentlyContinue).Source
if (-not $node) { Write-Error "Node.js introuvable dans le PATH."; exit 1 }

$taskName = "KayaniKitchenServer"
$settings = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries `
  -ExecutionTimeLimit ([TimeSpan]::Zero) -RestartCount 3 -RestartInterval (New-TimeSpan -Minutes 1) `
  -MultipleInstances IgnoreNew

$isAdmin = ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltinRole]::Administrator)
$registered = $false

try {
  if ($isAdmin) {
    $action    = New-ScheduledTaskAction -Execute $node -Argument ('"{0}"' -f $server) -WorkingDirectory $proj
    $trigger   = New-ScheduledTaskTrigger -AtStartup
    $principal = New-ScheduledTaskPrincipal -UserId "SYSTEM" -LogonType ServiceAccount -RunLevel Highest
    Register-ScheduledTask -TaskName $taskName -Action $action -Trigger $trigger -Settings $settings -Principal $principal -Force | Out-Null
    Write-Host "[OK] Tache planifiee creee (SYSTEM, au demarrage de Windows) - 24/7 meme hors session."
  } else {
    $action    = New-ScheduledTaskAction -Execute "wscript.exe" -Argument ('"{0}"' -f $vbs)
    $trigger   = New-ScheduledTaskTrigger -AtLogOn -User $env:USERNAME
    $principal = New-ScheduledTaskPrincipal -UserId $env:USERNAME -LogonType Interactive -RunLevel Limited
    Register-ScheduledTask -TaskName $taskName -Action $action -Trigger $trigger -Settings $settings -Principal $principal -Force | Out-Null
    Write-Host "[OK] Tache planifiee creee (a l'ouverture de session) - demarrage auto a chaque connexion."
    Write-Host "     Astuce : pour un 24/7 meme hors session, relancer ce script dans un terminal ADMINISTRATEUR."
  }
  $registered = $true
} catch {
  Write-Host "[i] Creation de tache refusee : $($_.Exception.Message)"
  $startup = [Environment]::GetFolderPath("Startup")
  Copy-Item $vbs (Join-Path $startup "KayaniKitchenServer.vbs") -Force
  Write-Host "[OK] Repli : raccourci ajoute au dossier Demarrage (lancement a la connexion)."
}

# Demarrage immediat (sans attendre le prochain redemarrage / la prochaine session)
if ($registered) {
  try { Start-ScheduledTask -TaskName $taskName } catch { Start-Process "wscript.exe" -ArgumentList ('"{0}"' -f $vbs) -WindowStyle Hidden }
} else {
  Start-Process "wscript.exe" -ArgumentList ('"{0}"' -f $vbs) -WindowStyle Hidden
}

# Verification
Start-Sleep -Seconds 2
try {
  $r = Invoke-WebRequest -UseBasicParsing -Uri "http://localhost:3000" -TimeoutSec 5
  Write-Host "[OK] Serveur en ligne (HTTP $($r.StatusCode)) -> http://localhost:3000"
} catch {
  Write-Host "[!] Pas encore de reponse - reessayez http://localhost:3000 dans quelques secondes."
}
