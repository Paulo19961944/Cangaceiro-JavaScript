// Cria uma Classe NegociacoesView
class NegociacoesView{
    // Cria um Construtor
    constructor(seletor){
        this._elemento = document.querySelector(seletor) // Seleciona o seletor do Elemento
    }

    // Atualiza o Modelo
    update(model){
        this._elemento.innerHTML = this.template(model) // Insere um Modelo HTML
    }

    // Retorna um Modelo
    template(model){
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
            ${model.paraArray().map(negociacao => `
                <tr>
                    <td>${DateConverter.paraTexto(negociacao.data)}</td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                    <td>${negociacao.volume}</td>
                </tr>
                `).join('')}
            </tbody>
            
            <tfoot>
                <tr>
                <td colspan="3"></td>
                <td>${model.volumeTotal}</td>
                </tr>
            </tfoot>
        </table>
        `
    }
}