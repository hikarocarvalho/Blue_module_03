//inclui express
const express = require('express');
//instancia app
const app = express();
//cria variavel express
const port = 3000;
//cria lista de jogos
const games = [
    'god of war',
    'prince of persia',
    'skirim',
    'shadow of mordor'
];
//cria rota raiz "rota principal"
app.get('/',(req,res)=>{
    res.send("pagina principal");
});
//cria rota para lista de games
app.get('/games',(req,res)=>{
    res.send(games);
})
//cria rota para selecinar game por index
app.get('/games/:id',(req,res)=>{
    const id = req.params.id;
    res.send(games[id-1]);
})
//inicia servidor em porta especifica
app.listen(port,()=>{
    console.info(`Aí a api ta rodando nesse lugar ai óh : http://localhost:${port}`);
});