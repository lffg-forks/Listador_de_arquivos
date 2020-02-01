import React, {useState} from 'react';
import { Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import './form.css';

import handleChange from '../utils/handleChange'

const fileTypeOptions = [
  {key: 0, value:'default', text: 'Tipo de arquivo'},
  {key: 'mp3', value: 'mp3', text: 'MP3'},
  {key: 'mp4', value: 'mp4', text: 'MP4'},
  {key: 'jpg', value: 'jpg', text: 'JPG'},
  {key: 'png', value: 'png', text: 'PNG'},
]

function FirstStep() {
  const [folderSelectorText, setFolderSelectorText] = useState("Seleciona uma pasta");

  return (
    <Form>
      <label htmlFor="folderSelecter" className="folderSelecter">{folderSelectorText}</label>
      <input
       type="file" 
       id="folderSelecter" 
       style={{display: 'none'}}
       onChange={(event)=>{event.persist(); setFolderSelectorText(handleChange(event).GetFolder); console.log(folderSelectorText)}}
       accept="false"
       directory="true" 
       webkitdirectory="true" 
       miltiple="true"/>
      <Form.Select className="select-folder" onChange={(event, {value})=>handleChange(event).SetFileType(value)} options={fileTypeOptions} placeholder="Tipo de arquivo"/>
    </Form>  
  );
}

export default FirstStep;
