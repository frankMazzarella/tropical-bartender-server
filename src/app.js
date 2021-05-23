const express = require('express');
const compression = require('compression');
const path = require('path');
const http = require('http');
const fs = require('fs');
const os = require('os');

const fileService = require('./services/File.service');
const SocketService = require('./services/Socket.service');

const port = 3000;
const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json')).toString());
const app = express();
const httpServer = http.createServer(app);
SocketService.init(httpServer);

const drinkListPath = path.join(__dirname, '..', 'drinks.json');
const drinkList = fileService.readJSONFileSync(drinkListPath);

app.use(compression());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.get('/healthcheck', (req, res) => res.json({ uptime: process.uptime(), version: packageJson.version }));
app.get('/drinks', (req, res) => res.json(drinkList));

httpServer.listen(port, () => {
  console.log(`${packageJson.name} v${packageJson.version} has started on port ${port} [host: ${os.hostname}]`);
});
