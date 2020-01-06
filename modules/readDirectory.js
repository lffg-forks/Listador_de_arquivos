const fileSystem = require("fs");

function readDirectory(url){
    return fileSystem.readdirSync(url)
}

 module.exports.readDirectory = readDirectory;