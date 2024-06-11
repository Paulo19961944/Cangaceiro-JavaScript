// Adiciona uma Classe de Negociação
class Negociacao {
    #data; // Privado(data)
    #quantidade;  // Privado(quantidade)
    #valor; // Privado(valor)

    // Chama um Construtor da Classe
    constructor(data, quantidade, valor) {
        this.#data = new Date(data.getTime()); // Captura a data e deixa imutável
        this.#quantidade = quantidade; // Captura a quantidade e deixa imutável
        this.#valor = valor; // Captura o valor e deixa imutável
        Object.freeze(this); // Congela os Dados
    }

    // Captura o Volume (Somente Leitura)
    get volume() {
        return this.#quantidade * this.#valor; // Faz o Calculo
    }

    // Captura a Data (Somente Leitura)
    get data() {
        return new Date(this.#data.getTime()); // Retorna a Data
    }

    // Captura a Quantidade (Somente Leitura)
    get quantidade() {
        return this.#quantidade; // Retorna a Quantidade
    }

    // Captura o Valor (Somente Leitura)
    get valor() {
        return this.#valor; // Retona o Valor
    }
}