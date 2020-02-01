import getFolder from './getFolder';

function handleChange(event, functionChoosed){
    return {
      SetFileType(value){
        if(value !== 'default' && value !== 'undefined'){
          localStorage.setItem("file_type", value)
        }
      },
      GetFolder(){
        return getFolder(event).edited_url
      }
    }
}

export default handleChange;