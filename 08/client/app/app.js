const controller = new NegociacaoController() // Chama a Classe NegociacaoController

// Adiciona Evento de Submit no Formulário
document.querySelector('.form')
.addEventListener('submit', controller.adiciona.bind(controller))

// Adiciona Evento de Click no Botão Apaga
document.querySelector('#botao-apaga')
.addEventListener('click', controller.apaga.bind(controller))