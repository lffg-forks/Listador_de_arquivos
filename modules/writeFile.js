const fileSystem  = require("fs");

async function writeFile(outputFilePath, outputFileName, files){
    const arrayOfFiles = []
    files[0].map((FileList, index)=>{arrayOfFiles.push(`${files[0][index]}\n`)})
    return fileSystem.writeFileSync(`${outputFilePath}/${outputFileName}`, arrayOfFiles, {enconding: 'utf-8'})
}

module.exports.writeFile = writeFile;
