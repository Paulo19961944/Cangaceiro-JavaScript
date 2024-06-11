let controller = new NegociacaoController() // Invoca a Instância Controller

// Adiciona Evento ao Formulário
document.querySelector('.form')
.addEventListener('submit', controller.adiciona.bind(controller)) // Adiciona Bind para Corrigir Erros