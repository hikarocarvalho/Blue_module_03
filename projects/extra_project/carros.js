
module.exports = class carros{
    constructor(modelo, marca, categoria, tipoCombustivel, ano){
        this.modelo = modelo;
        this.marca = marca;
        this.categoria = categoria;
        this.tipoCombustivel = tipoCombustivel;
        this.ano = ano;
    }
    getmodelo() {
        return this.modelo;
    }
    getmarca(){
        return this.marca;
    }
    getcategoria(){
        return this.categoria;
    }
    gettipoCombustivel(){
        return this.tipoCombustivel;
    }
    getano(){
        return this.ano;
    }
    setmodelo(valor){
        this.modelo = valor;
    }
    setmarca(valor){
        this.marca = valor;
    }
    setcategoria(valor){
        this.categoria = valor;
    }
    settipoCombustivel(valor){
        this.tipoCombustivel = valor;
    }
    setano(valor){
        this.ano = valor;
    }
}
