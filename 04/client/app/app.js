const controller = new NegociacaoController; // Chama a Classe Negociação Controlller

// Adiciona Evento no Formulário
document.querySelector('.form')
.addEventListener('submit', controller.adiciona.bind(controller))