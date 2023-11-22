import React from 'react';
import ReactDOM from 'react-dom/client';
import { HooksApp } from './HooksApp';
import 'bootstrap/dist/css/bootstrap.css';
import { CounterApp } from './01-useState/CounterApp';
import { CounterWitchCustomHook } from './01-useState/CounterWitchCustomHook';
import { SimpleForm } from './02-useEffect/SimpleForm';
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
import { FocusScreen } from './04-useRef/FocusScreen';


ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <FocusScreen />
  //</React.StrictMode>,
)
