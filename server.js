const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use('/Media', express.static(path.join(__dirname, 'Media')));
app.use(express.static('public'));
app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/tesla_account', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tesla_account.html'));
});

app.get('/tesla_support', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tesla_support.html'));
});

app.get('/models', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'model_s.html'));
});

app.get('/model3', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'model_3.html'));
});

app.get('/modelx', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'model_x.html'));
});

app.get('/modely', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'model_y.html'));
});

app.get('/cybertruck', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cybertruck.html'));
});

app.listen(port, () => {
    console.log("Running on localhost:" + port);
});
