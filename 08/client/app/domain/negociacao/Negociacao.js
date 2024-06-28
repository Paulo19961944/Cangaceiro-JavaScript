// Classe Negociação
class Negociacao{
    // Construtor da Classe
    constructor(_data, _quantidade, _valor){
        Object.assign(this, {_quantidade, _valor}) // Deixa o Objeto Imutável
        this._data = new Date(_data.getTime()) // Captura a Data
        Object.freeze(this) // Congela o Objeto
    }

    // Captura o Volume (Apenas Leitura)
    get volume(){
        return this._quantidade * this._valor // Retorna o Calculo
    }

    // Captura a Data (Apenas Leitura)
    get data(){
        return new Date(this._data.getTime()) // Retorna a Data
    }

    // Captura a Quantidade (Apenas Leitura)
    get quantidade(){
        return this._quantidade // Retorna a Quantidade
    }

    // Captura o Valor (Apenas Leitura)
    get valor(){
        return this._valor // Retorna o Valor
    }
}