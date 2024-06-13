// Cria uma Classe Negociações
class Negociacoes{
    constructor(){
        this._negociacoes = [] // Cria uma Lista Vazia de Negociações
    }
    
    // Metódo que adiciona uma negociação
    adiciona(negociacao){
        this._negociacoes.push(negociacao) // Adiciona a Negociação no Fim da Lista
    }

    paraArray(){
        return [].concat(this._negociacoes)
    }
}