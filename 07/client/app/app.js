const controller = new NegociacaoController()

const form = document.querySelector('.form')
form.addEventListener('submit', controller.adiciona.bind(controller))