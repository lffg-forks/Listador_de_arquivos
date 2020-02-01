import React from 'react';
import { Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import './form.css';

function FirstStep() {
  return (
    <Form>
      <label htmlFor="folderSelecter" className="folderSelecter">Selecione uma pasta</label>
      <input type="file" id="folderSelecter" style={{display: 'none'}} directory="" webkitdirectory="" miltiple=""/>
      <Form.Input className="outputFileName" placeholder='Digite o nome da lista' id='form-input-first-name'
    />
    </Form>  
  );
}

export default FirstStep;
