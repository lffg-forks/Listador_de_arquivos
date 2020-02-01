const editUrl = require('./editUrl.js');

function getFolder(event){
    let files = event.target.files;
    let fileName = files[0].name
    let folder = files[0].path
    let removeFileName;
    folder.length > 50? console.log(true): console.log(false)
    if(fileName !== null || fileName !== 'undefined'){
        removeFileName = folder.replace(fileName, "");
    }
    folder = removeFileName;
    console.log("oi "+folder)
    return {
        "unchanged_url": folder,
        "edited_url": folder.length > 50? editUrl(folder, fileName): folder
    }
}

export default getFolder;