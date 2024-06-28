// Classe View (Superclasse de MensagemView e de NegociacoesView)
class View{
    // Construtor da Classe
    constructor(seletor){
        this._elemento = document.querySelector(seletor) // Armazena o Seletor
    }

    // Atualiza o Modelo
    update(model){
        this._elemento.innerHTML = this.template(model) // Exibe o Modelo na Tela
    }

    // Retorna um Modelo
    template(model){
        throw new Error `Você precisa implementar o Modelo` // Caso não implemente um modelo, lança uma exceção
    }
}