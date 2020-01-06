const readline = require('readline-sync');

console.log("Listador de arquivos v1.0");

const userInterface = {
    AskAndReturnTheFolderPath(){
        return readline.question("Digite o caminho do arquivo: ")
    },
    AskAndReturnTheFileType(){
        console.log("Tipo de arquivo:")
        const options = ['MP3', 'MP4', 'JPG', 'PNG'];
        const selectPrefixIndex = readline.keyInSelect(options);
        if(selectPrefixIndex > -1){
            return options[selectPrefixIndex];
        }else{
            console.log("Canceled")
        }
    },
    AskAndReturnTheOutputFileName(){
        return readline.question("Digite o nome do arquivo de texto: ")
    },
    AskAndReturnWhereTheUserWantsToSaveTheFile(){
        return readline.question("Onde deseja salvar o arquivo? ")
    }
}

module.exports = userInterface;