// Classe MensagemView que Herda de View seus atributos e métodos
class MensagemView extends View{
    // Retorna um modelo
    template(model){
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`
    }
}