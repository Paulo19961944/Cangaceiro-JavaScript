// Cria uma Classe NegociacaoController
class NegociacaoController{
    // Cria um Construtor da Classe
    constructor(){
        const $ = document.querySelector.bind(document) // Cria uma Variável com o documentQuerySelector
        this._inputData = $('#data') // Captura a Data
        this._inputQuantidade = $('#quantidade') // Captura a Quantidade
        this._inputValor = $('#valor') // Captura o Valor
    }

    // Chama o Método Adiciona
    adiciona(event){
        event.preventDefault() // Previne o Envio Padrão do Formulário

        // Chama a Instância Negociação com os Parâmetros
        const negociacao = new Negociacao(
            DateConverter.paraData(this._inputData.value), // Chama o metodo paraData de DateConverter
            parseInt(this._inputQuantidade.value), // Quantidade
            parseFloat(this._inputValor.value) // Valor
        )

        let diaMesAno = DateConverter.paraTexto(negociacao.data) // Chama o metodo paraTexto de DateConverter
        console.log(diaMesAno) // Imprime o Dia, Mes e Ano
    }
}