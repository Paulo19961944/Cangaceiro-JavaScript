// Classe Negociações
class Negociacoes{
    // Construtor da Classe
    constructor(armadilha){
        this._negociacoes = []; // Cria uma Array Vazia
        this._armadilha = armadilha // Armazena a Variavel Armadilha
        Object.freeze(this) // Congela o Objeto
    }

    // Adiciona uma Negociação
    adiciona(negociacao){
        this._negociacoes.push(negociacao); // Adiciona uma Negociação na Lista
        this._armadilha(this) // Chama o This Armadilha
    }

    // Método Esvazia
    esvazia(){
        this._negociacoes.length = 0 // Apaga os Itens
        this._armadilha(this) // Chama o This Armadilha
    }

    // Metódo que Concatena as Negociações
    paraArray(){
        return [].concat(this._negociacoes); // Concatena as Negociacoes
    }

    // Captura o Volume Total
    get volumeTotal(){
        // Soma todas as Negociações
        return this._negociacoes.reduce
        ((total, negociacao) => total + negociacao.volume, 0)
    }
}