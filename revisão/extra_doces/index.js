const express = require('express');

const app = express();

const port = 3000;

app.use(express.json());

const doces = [
    'chocolate',
    'caramelo',
    'chiclete',
    'sorvete'
];

app.get('/',(req,res)=>{
    res.send("bem vindo(a) a minha pagina");
});

app.get('/doces',(req,res)=>{
    res.send(doces);
});

app.get('/doces/:posicao',(req,res)=>{
    var posicao = req.params.posicao-1;
    res.send(doces[posicao]);
});

app.post('/doces',(req,res)=>{
    var doce = req.body.doce;
    doces.push(doce);
    res.send(`você adicionou o doce:${doce}`);
});

app.put('/doces/:posicao',(req,res)=>{
    var posicao = req.params.posicao-1;
    var doce = req.body.doce;
    var doceantigo = doces[posicao]; 
    doces[posicao] = doce;
    res.send(`você atualizou o valor do doce:${doceantigo} , para o o doce; ${doce}`);
});

app.delete('/doces/:posicao',(req,res)=>{
    var posicao = req.params.posicao-1;
    var doce = doces[posicao];
    delete doces[posicao];
    res.send(`voce removeu o doce:${doce} `);
});

app.delete('/docessplice/:posicao',(req,res)=>{
    var posicao = req.params.posicao-1;
    var doce = doces[posicao];
    doces.splice(posicao,1);
    res.send(`voce removeu o doce:${doce} `);
});

app.listen(port,() => {
    console.info(`App esta rodando em : http://localhost:${port}`);
});
