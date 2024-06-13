// Cria uma Classe Negociação
class Negociacao{
    #data // Atributo Privado (data) 
    #quantidade // Atributo Privado (quantidade)
    #valor // Atributo Privado(valor)

    // Cria um Construtor para a Classe
    constructor(data, quantidade, valor){
        this.#data = new Date(data.getTime()) // Captura a Data
        this.#quantidade = quantidade // Captura a Quantidade
        this.#valor = valor // Captura o Valor
        Object.freeze(this) // Congela o Objeto
    }

    // Metodo Somente Leitura (Volume)
    get volume(){
        return this.#quantidade * this.#valor // Retorna o Resultado
    }

    // Metodo Somente Leitura (Data)
    get data(){
        return new Date(this.#data.getTime()) // Retorna a Data
    }

    // Metodo Somente Leitura (Quantidade)
    get quantidade(){
        return this.#quantidade // Retorna a Quantidade
    }

    // Metodo Somente Leitura (Valor)
    get valor(){
        return this.#valor // Retorna o Valor
    }
}