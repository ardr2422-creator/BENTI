' Démarre le serveur Kayani Kitchen en arrière-plan, fenêtre masquée.
' Utilisé par la tâche planifiée (ouverture de session) et le démarrage immédiat.
Dim sh
Set sh = CreateObject("WScript.Shell")
sh.CurrentDirectory = "C:\Users\One\kayani kitchen"
sh.Run "node ""C:\Users\One\kayani kitchen\server.js""", 0, False
