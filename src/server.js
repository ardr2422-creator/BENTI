const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 4000;
const PUBLIC = path.join(__dirname, '..', 'public');

app.use(express.static(PUBLIC));

app.get('/:page', (req, res, next) => {
  const fichier = path.join(PUBLIC, req.params.page + '.html');
  if (fs.existsSync(fichier)) {
    res.sendFile(fichier);
  } else {
    next();
  }
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(PUBLIC, 'index.html'));
});

const server = app.listen(PORT, () => {
  console.log(`Cyan Food — serveur démarré sur http://localhost:${PORT}`);
});

server.setTimeout(0);
server.keepAliveTimeout = 0;
