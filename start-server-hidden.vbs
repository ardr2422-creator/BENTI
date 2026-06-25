' Démarre le serveur C'est Mon Dessert en arrière-plan, fenêtre masquée.
' Sert le site sur http://localhost:2000 (voir server.js, PORT par défaut 2000).
' Utilisé par la tâche planifiée (ouverture de session) et le démarrage immédiat.
Dim sh
Set sh = CreateObject("WScript.Shell")
sh.CurrentDirectory = "C:\Users\One\C MON DESSERT"
sh.Run "node ""C:\Users\One\C MON DESSERT\server.js""", 0, False
