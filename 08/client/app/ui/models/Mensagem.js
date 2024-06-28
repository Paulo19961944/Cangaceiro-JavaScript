// Classe Mensagem
class Mensagem{
    // Construtor da Classe
    constructor(texto = ''){
        this._texto = texto // Armazena o Texto
    }

    // Captura o Texto
    get texto(){
        return this._texto // Retorna o Texto
    }

    // Define o Texto
    set texto(texto){
        this._texto = texto // Armazena o Texto
    }
}