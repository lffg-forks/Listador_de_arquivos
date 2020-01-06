const readDirectory = require("./modules/readDirectory.js")
const userInterface = require("./modules/userInterface")
const writeFile = require("./modules/writeFile.js")
const filterFilenames = require("./modules/filterFilenames.js")

const folderPath = userInterface.AskAndReturnTheFolderPath();
const fileType = userInterface.AskAndReturnTheFileType();
const outputFileName = userInterface.AskAndReturnTheOutputFileName();
const outputFilePath = userInterface.AskAndReturnWhereTheUserWantsToSaveTheFile();

let files = []

files.push(readDirectory.readDirectory(folderPath));

let filteredFilenames = []

filteredFilenames.push(filterFilenames.filterFilenames(fileType, files))

const save = (async ()=>{
    try {
        console.log("Salvando o arquivo...")
        await writeFile.writeFile(outputFilePath, outputFileName, filteredFilenames);
        console.log(`[\u2713] Arquivo salvo em ${outputFilePath}`)
    } catch (error) {
        console.log("Ops! Não conseguimos salvar o arquivo, contate o desenvolvedor deste software.")
    }
})();

