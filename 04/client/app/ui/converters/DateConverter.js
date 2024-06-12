// Cria uma Classe DateConverter
class DateConverter{
    constructor(){
        throw new Error('Esta classe não pode ser instanciada') // Exibe um erro no console caso instancie a classe
    }

    // Função Estática para Capturar a Data(Não pode ser instânciada)
    static paraTexto(data){
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear}` // Retorna a Data
    }

    // Função Estática para Converter a Data
    static paraData(texto){
        if(!/^\d{4}-\d{2}-\d{2}$/.test(texto))
            throw new Error('Deve estar no formato aaaa-mm-dd'); // Exibe um erro caso não esteja no formato padrão

        return new Date(...texto.split('-') // Separa a Data que estiver com '-'
        .map((item, indice) => item - indice %2) // Mapeia cada Item e subtrai o valor de 1 no Indice Impar (Evita um If)
    )}
}