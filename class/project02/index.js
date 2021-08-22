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
    'shadow of mordor',
    'minecraft',
    'fortnite',
    'age of empires I',
    'age of empires II',
    'age of empires III',
    '0ad'
];
//cria lista de mensagens
const msgs = [
    "mano é melhor tu não me aparecer aqui mais",
    "Tu ta se achando macho em aparecer aqui ",
    "tu ta me zoando ? some daqui",
    "caça teu rumo ou c vai se arrepender",
    "poh para caramba",
    "some daqui",
    "va pra p....",
    "seu vagab undo",
    "Sua existência é apenas uma ameaça -> a sobrevivência da raça humana"
];
//função para selecionar frase aleatória
function randomMinMax(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}
//teste com json
const jsongames = JSON.stringify(Object.assign({},games));
//cria rota raiz "rota principal"
app.get('/',(req,res)=>{
    res.send(msgs[randomMinMax(0,msgs.length)]);
});
//cria rota para lista de games
app.get('/games',(req,res)=>{
    res.send(games);
});
app.post('/games',(req,res)=>{
    const game = req.body.game;
    const id = games.length;
    games.push(game);
    res.send(`You have add a new game ${game}, The id from your game is: ${id}`);
});
app.put('/games/:id',(req,res)=>{
    const id = req.params.id -1;
    const game = req.body.game;
    const backgame = games[id];
    games[id]=game;
    res.send(`Game back: ${backgame}`);
})
//cria rota para selecinar game por index
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
//delete
app.delete('/games/:id',(req,res)=>{
    const id = req.params.id -1;
    const game = games[id];
    if(!game){
        res.send("Your games do not have position in our list, sorry!");
    }
    delete games[id];
    res.send("You have delete one game with sucess!");
})
//cria rota para json list
app.get('/gamesjson',(req,res)=>{
    res.send(jsongames);
});
//cria rota para item json
app.get('/gamesjson/:id',(req,res)=>{
    const id=req.params.id;
    var conv = id.toString();
    res.send(jsongames[conv]);
});
//inicia servidor em porta especifica
app.listen(port,()=>{
    console.info(`Aí a api ta rodando nesse lugar ai óh ===> : http://localhost:${port}`);
});