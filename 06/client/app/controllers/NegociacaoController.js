// Cria uma Classe NegociacaoController
class NegociacaoController{
    // Cria um Construtor da Classe
    constructor(){
        const $ = document.querySelector.bind(document) // Cria uma Variável com o documentQuerySelector
        this._inputData = $('#data') // Captura a Data
        this._inputQuantidade = $('#quantidade') // Captura a Quantidade
        this._inputValor = $('#valor') // Captura o Valor
        this._negociacoes = new Negociacoes() // Chama a Classe Negociações
        this._negociacoesView = new NegociacoesView('#negociacoes') // Chama a Classe NegociacoesView
        this._negociacoesView.update(this._negociacoes) // Atualiza as Negociações
    }

    // Chama o Método Adiciona
    adiciona(event){
        event.preventDefault() // Previne o Envio Padrão do Formulário
        this._negociacoes.adiciona(this._criaNegociacao()); // Cria uma Negociacao
        this._negociacoesView.update(this._negociacoes); // Atualiza uma Negociacao
        this._limpaFormulario(); // Limpa o Formulário
    }

    // Limpa o Formulário
    _limpaFormulario(){
        this._inputData.value = '' // Reset
        this._inputQuantidade.value = 1 // Reset
        this._inputValor.value = 0.0 // Reset
        this._inputData.focus() // Reset
    }

    // Cria uma Negociação
    _criaNegociacao(){
        return new Negociacao(
            DateConverter.paraData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        )
    }
}