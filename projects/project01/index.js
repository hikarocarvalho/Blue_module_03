// importação da biblioteca express
const express = require('express');
// criação de objeto sob a biblioteca express
const app = express();
// porta para ser utilizada
const port = 3000;
// lista de filmes
const filmes = [
    'Cara cadê meu carro',
    'Gentleman',
    'Dragon ball - Brolly',
    'One piece - Gold'
];
// rota raiz
app.get('/', (req, res) => {
    res.send("Bem vindos ao site!");
});
// rota para mostrar todos os filmes
app.get('/filmes', (req, res) => {
    res.send(filmes);
});
// rota prara mostrar filme especifico
app.get('/filmes/:id', (req, res) => {
    const id = req.params.id;
    const filme = filmes[id - 1];
    res.send(filme);
});
// rota para servidor
app.listen(port, () => {
    console.info(`App esta rodando em : http://localhost:${port}`);
});