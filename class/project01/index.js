const express = require('express');

const app = express();

const port = 3000;

const filmes = [
    'Matrix',
    'Vingadores',
    'Velozes e furiozos'
];
// GET / Home
app.get('/', (req, res) => {
    res.send("Bem vindos ao site!");
});
app.get('/filmes', (req, res) => {
    res.send(filmes);
});
app.get('/filmes/:id', (req, res) => {
    const id = req.params.id;
    const filme = filmes[id - 1];
    res.send(filme);
});
app.listen(port, () => {
    console.info(`App esta rodando em : http://localhost:${port}`);
});