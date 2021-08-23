// importação da biblioteca express
const { json } = require('express');
const express = require('express');
// criação de objeto sob a biblioteca express
const app = express();

app.use(express.json());
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
// rota para post
app.post('/filmes',(req,res)=>{
    const filme = req.body.filme;
    filmes.push(filme);
    res.send(`Um filme foi adicionado: ${filme}`);
});
// rota para put
app.put('/filmes/:id',(req,res)=>{
    const filme = req.body.filme;
    const id = req.params.id -1;
    const filmeold = filmes[id];
    filmes[id] = filme;
    res.send(`Um filme foi atualizado: ${filmeold} para: ${filme}`);
});
// rota para delete
app.delete('/filmes/:id',(req,res)=>{
    const id = req.params.id-1;
    const filme = filmes[id];
    delete filmes[id];
    res.send(`Um filme foi removido: ${filme}`);
})
// rota para delete com splice
app.delete('/filmessplice/:id',(req,res)=>{
    const id = req.params.id-1;
    const filme = filmes[id];
    filmes.splice(id,1);
    res.send(`Um filme foi removido: ${filme}`);
})
// rota para servidor
app.listen(port, () => {
    console.info(`App esta rodando em : http://localhost:${port}`);
});