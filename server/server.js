const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const HOSTNAME = '127.0.0.1';
const PORT = 80;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/move', (req, res) => {
    fs.appendFileSync(req.connection.remoteAddress + '.log', 'move ' + req.body.x + ' ' + req.body.y + '\n');

    res.send('OK');
});

app.post('/click', (req, res) => {
    fs.appendFileSync(req.connection.remoteAddress + '.log', 'click ' + req.body.button + ' ' + (req.body.pressed === 'True' ? 'press' : 'release') + ' ' + req.body.x + ' ' + req.body.y + '\n');

    res.send('OK');
});

app.post('/scroll', (req, res) => {
    fs.appendFileSync(req.connection.remoteAddress + '.log', 'scroll ' + req.body.x + ' ' + req.body.y + ' ' + req.body.dx + ' ' + req.body.dy + '\n');

    res.send('OK');
});

app.post('/press', (req, res) => {
    fs.appendFileSync(req.connection.remoteAddress + '.log', 'key press ' + req.body.key + '\n');

    res.send('OK');
});

app.post('/release', (req, res) => {
    fs.appendFileSync(req.connection.remoteAddress + '.log', 'key release ' + req.body.key + '\n');

    res.send('OK');
});

app.listen(PORT, () => {
    console.log('RUNNING');
});
