// Captura os Campos
var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
]

var tbody = document.querySelector('table tbody') // Captura o tbody

// Adiciona evento ao Documento
document.addEventListener('submit', (event) =>{
    event.preventDefault() // Previne o Envio Padrão do Formulário
    var tr = document.createElement('tr') // Cria uma Linha

    // Percorre todos os campos
    campos.forEach(campo => {
        var td = document.createElement('td') // Cria uma Coluna
        td.textContent = campo.value // Adiciona o Campo como Conteúdo
        tr.appendChild(td) // Adiciona a coluna na linha
    })

    var tdVolume = document.createElement('td') // Cria uma Coluna par o volume
    tdVolume.textContent = campos[1].value * campos[2].value // Multiplica o Valor pela Quantidade
    tr.appendChild(tdVolume) // Adiciona a Coluna do Volume em uma Linha
    tbody.appendChild(tr) // Adiciona a Linha no tbody

    campos[0].value = '' // Define um valor vazio para a data
    campos[1].value = 1 // Define o valor de 1 pra a quantidade
    campos[2].value = 0 // Define o valor de 0 para o valor
    campos[0].focus() // Foca na Data
})
