//inclui express
const express = require('express');
//instancia app
const app = express();
//cria variavel express
const port = 3000;
//declara retornos como json
app.use(express.json());
//cria lista de jogos
const games = [
    'god of war',
    'prince of persia',
    'skirim',
    'shadow of mordor',
    'minecraft',
    'fortnite',
    'age of empires I',
    'age of empires II',
    'age of empires III',
    '0ad'
];
//função para selecionar jogo aleatório
function random(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}
//cria rota raiz "rota principal"
app.get('/',(req,res)=>{
    res.send(games[random(0,games.length)]);
});
//cria rota para lista de games
app.get('/games',(req,res)=>{
    res.send(games);
});
//atualiza item especifico na lista
app.put('/games/:id',(req,res)=>{
    const id = req.params.id -1;
    const game = req.body.game;
    const backgame = games[id];
    games[id]=game;
    res.send(`This game: ${backgame} has changed to this game: ${game}`);
})
//adiciona um novo item a lista de games
app.post('/games',(req,res)=>{
    const game = req.body.game;
    console.log(req.body);
    const id = games.length;
    games.push(game);
    res.send(`You have add a new game ${game}, The id from your game is: ${id}`);
});

//cria rota para selecinar game especifico
app.get('/games/:id',(req,res)=>{
    const id = req.params.id;
    var game = ""
    if(games[id-1]){
        game = games[id -1];
    }else{
        game = "error index out of the range";
    }
    res.send(game);
});
//remove valor de game especifico
app.delete('/games/:id',(req,res)=>{
    const id = req.params.id -1;
    const game = games[id];
    if(!game){
        res.send("Your games do not have position in our list, sorry!");
    }
    delete games[id];
    res.send("You have delete one game with sucess!");
});
//remove completamente o item da lista
app.delete('/gamessplice/:id',(req,res)=>{
    const id = req.params.id -1;
    //remove item completamente
    games.splice(id,1);
    res.end('You remove now one Game,from the list!')
});
//inicia servidor em porta especifica
app.listen(port,()=>{
    console.info(`Aí a api ta rodando nesse lugar ai óh ===> : http://localhost:${port}`);
});