// Cria uma Classe NegociacaoController
class NegociacaoController {

    // Cria um Construtor
    constructor() {
        let $ = document.querySelector.bind(document); // Cria um Método que armazena o querySelector e integra com o document
        this._inputData = $('#data'); // Captura a Data
        this._inputQuantidade = $('#quantidade'); // Captura a Quantidade
        this._inputValor = $('#valor'); // Captura o Valor
    }

    // Cria uma Função Adiciona
    adiciona(event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        // Cria uma Data e separa as Arrays pelo Spread Operator
        let data = new Date(...
            this._inputData.value // Captura o Valor de Data
                .split('-') // Separa o que está em Hifen em uma Array
                .map((item, indice) => item - indice % 2) // Mapeia Indice por Indice subtrai pelo seu módulo(Evita um if)
        );

        // Chama a Classe Negociação com seus Parâmetros
        let negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        console.log(negociacao); // Imprime a Negociação na Tela
    }
}