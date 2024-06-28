// Controller (Executa ações)
class NegociacaoController{
    // Método Construtor
    constructor(){
        const $ = document.querySelector.bind(document) // Seleciona um Seletor em um documento
        this._inputData = $('#data') // Input de Data
        this._inputQuantidade = $('#quantidade') // Input de Quantidade
        this._inputValor = $('#valor') // Input de Valor
        
        // Adiciona as Negociações
        this._negociacoes = new Negociacoes( model =>{
            this._negociacoesView.update(model) // Atualiza o Modelo
        })

        this._negociacoesView = new NegociacoesView('#negociacoes') // Chama a Classe NegociaçõesView
        this._negociacoesView.update(this._negociacoes) // Atualiza as Negociações
        this._mensagem = new Mensagem() // Chama a Classe Mensagem
        this._mensagemView = new MensagemView('#mensagemView') // Chama a Classe MensagemView
        this._mensagemView.update (this._mensagem) // Atualiza a Mensagem
    }

    // Adiciona Elementos e Funções
    adiciona(event){
        event.preventDefault() // Previne o Envio Padrão do Formulário
        this._negociacoes.adiciona(this._criaNegociacao()) // Adiciona uma Negociação
        this._mensagem.texto = 'Negociação adicionada com sucesso' // Exibe uma mensagem na tela
        this._negociacoesView.update(this._negociacoes) // Atualiza as Negociações
        this._mensagemView.update (this._mensagem) // Atualiza a Mensagem
        this._limpaFormulario() // Limpa o Formulário
    }

    // Cria uma Negociação
    _criaNegociacao(){
        // Chama a Classe Negociação
        return new Negociacao(
            DateConverter.paraData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        )
    }

    // Limpa o Formulário
    _limpaFormulario(){
        this._inputData.value = '' // Reseta
        this._inputQuantidade.value = 1 // Reseta
        this._inputValor.value = 0.0 // Reseta
        this._inputData.focus() //Reseta
    }

    // Apaga as Negociações
    apaga(){
        this._negociacoes.esvazia() // Chama o Método Esvazia
        this._mensagem.texto = 'Negociações apagadas com sucesso' // Exibe a mensagem na tela
        this._mensagemView.update(this._mensagem) // Atualiza as Mensagens
    }
}