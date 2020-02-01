import React, {useState} from 'react';
import { Button, Segment } from 'semantic-ui-react';
import StepIndicator from './components/StepIndicator'
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep'
import 'semantic-ui-css/semantic.min.css'
import './App.css';

function App() {
  const [step, setStep] = useState('First');

  return (
    <>
    <StepIndicator step={step} />
    <Segment attached>
      <ul>
        <li>
          {step === 'First'?
           <FirstStep />:
           <SecondStep />
           }
        </li>
        <li className="buttons">
          {step === 'Second'?
            <Button content='Anterior' icon='left arrow' onClick={()=>setStep('First')} labelPosition='left' />:
            null
          } 
        <Button content={step === 'First'? 'Próximo': 'Gerar arquivo'} positive icon='right arrow' onClick={()=>{setStep('Second')}} labelPosition='right' />
        </li>
      </ul>
    </Segment>
    </>
  );
}

export default App;
