# =========================================================================
# Kayani Kitchen — Désinstalle le démarrage automatique et arrête le serveur.
# =========================================================================
$ErrorActionPreference = "SilentlyContinue"

$taskName = "KayaniKitchenServer"
Unregister-ScheduledTask -TaskName $taskName -Confirm:$false
Write-Host "[OK] Tache planifiee supprimee (si elle existait)."

$startup = [Environment]::GetFolderPath("Startup")
Remove-Item (Join-Path $startup "KayaniKitchenServer.vbs") -Force
Write-Host "[OK] Raccourci du dossier Demarrage retire (si present)."

# Arrete les processus node qui servent server.js
Get-CimInstance Win32_Process -Filter "Name = 'node.exe'" |
  Where-Object { $_.CommandLine -like "*server.js*" } |
  ForEach-Object { Stop-Process -Id $_.ProcessId -Force }
Write-Host "[OK] Serveur arrete."
