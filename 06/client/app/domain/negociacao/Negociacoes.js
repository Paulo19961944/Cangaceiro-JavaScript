// Cria uma Classe Negociações
class Negociacoes{
    constructor(){
        this._negociacoes = [] // Cria uma Lista Vazia de Negociações
    }
    
    // Metódo que adiciona uma negociação
    adiciona(negociacao){
        this._negociacoes.push(negociacao) // Adiciona a Negociação no Fim da Lista
    }

    // Retorna Todas as Negociações
    paraArray(){
        return [].concat(this._negociacoes)
    }

    // Captura o Volume Total
    get volumeTotal() {
        // Retorna o Volume de Todas as Negociações
        return this._negociacoes
            // Reduz todos seus elementos em um único valor
            .reduce((total, negociacao) => {
                return total + negociacao.volume}, 0) // Retorna o total das negociações
    }
}