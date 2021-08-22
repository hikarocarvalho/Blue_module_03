const express = require('express');
const carro = require('./carros');

const app = express();

const port = 3000;

const carros = [
    new carro('sandeiro','volks','passeio','gasolina',2015),
    new carro('mille','fiat','passeio','gasolina',2018),
    new carro('hilux','ford','trilha','diesel',2012)
];

app.use(express.json());

app.get('/',(req, res)=>{
    res.send('Bem vindo a minha api de carros!!');
});

app.get('/carros',(req,res)=>{
    var cars = JSON.stringify(carros);
    res.send(cars);
});

app.get('/carros/:id',(req,res)=>{
    if (req.params.id <= carros.length && req.params.id >= 1){
        var car = JSON.stringify(carros[req.params.id-1]);
        res.send(car);
    }
    res.send("carro não cadastrado");
});

app.get('/carros/:id/:item',(req,res)=>{
    if (req.params.id <= carros.length && req.params.id >= 1){
        var id = req.params.id-1;
        var item = req.params.item-1;
        var response;
        switch(item){
            case 0:{
                response = carros[id].getmodelo();
                break;
            }
            case 1:{
                response = carros[id].getmarca();
                break;
            }
            case 2:{
                response = carros[id].getcategoria();
                break;
            }
            case 3:{
                response = carros[id].gettipoCombustivel();
                break;
            }
            case 4:{
                response = carros[id].getano();
                break;
            }
            default:{
                response = "item não cadastrado"
            }
        }
        var car = JSON.stringify(response);
        res.send(car);
    }
    res.send("carro não cadastrado");
});

app.post('/carros',(req,res)=>{
    const id = carros.length;
    console.log(req.body);
    const modelo = req.body.modelo;
    const marca = req.body.marca;
    const categoria = req.body.categoria;
    const tipoCombustivel = req.body.tipoCombustivel;
    const ano = req.body.ano;
    carros.push(new carro(modelo,marca,categoria,tipoCombustivel,ano));
    const car = JSON.stringify(carros[id]);
    res.send(`Você adicionou um novo carro ${car}, e o id do novo carro é: ${id}`);
});

app.put('/carros/:id',(req,res)=>{
    const id = req.params.id-1;
    const modelo = req.body.modelo;
    const marca = req.body.marca;
    const categoria = req.body.categoria;
    const tipoCombustivel = req.body.tipoCombustivel;
    const ano = req.body.ano;
    carback = JSON.stringify(carros[id]);
    // carros[id] = new carro(modelo,marca,categoria,tipoCombustivel,ano);
    carros[id].setmodelo(modelo);
    carros[id].setmarca(marca);
    carros[id].setcategoria(categoria);
    carros[id].settipoCombustivel(tipoCombustivel);
    carros[id].setano(ano);
    car = JSON.stringify(carros[id]);
    res.send(`Você atualizou o carro ${carback}, com o id: ${id} , para ${car} utilizando o mesmo id`);
});

app.delete('/carros/:id',(req,res)=>{
    const id = req.params.id-1;
    var message ="";
    if(carros[id]){
        delete carros[id];
        message = "você deletou um carro da lista!";
    }
    else{
       message = "o carro selecionado não existe";
    }
    res.send(message);

});

app.delete('/carrossplice/:id',(req,res)=>{
    const id = req.params.id-1;
    var message ="";
    if(carros[id]){
        carros.splice(id,1);
        message = "você deletou um carro da lista!";
    }
    else{
       message = "o carro selecionado não existe";
    }
    res.send(message);

});

app.listen(port,()=>{
    console.info(`Aí a api ta rodando nesse lugar ai óh : http://localhost:${port}`);
});