// Classe DateConverter
class DateConverter{
    // Construtor da Classe
    constructor(){
        throw new Error('Esta classe não pode ser instanciada!') // Lança uma Exceção
    }

    // Método para capturar a data
    static paraData(texto){
        // Se não estiver no formato correto, lança uma exceção
        if(!/^\d{4}-\d{2}-\d{2}$/.test(texto))
            throw new Error('O Formato deve ser YYYY-MM-DD')

        // Retorna a data
        return new Date(...texto.split('-').
        map((item, indice) => item - indice %2)
    )}

    // Converte a Data em um Formato Legível
    static paraTexto(data){
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}` //Retorna a Data
    }
}