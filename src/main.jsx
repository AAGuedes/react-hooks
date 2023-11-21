import React from 'react';
import ReactDOM from 'react-dom/client';
import { HooksApp } from './HooksApp';
import 'bootstrap/dist/css/bootstrap.css';
import { CounterApp } from './01-useState/CounterApp';
import { CounterWitchCustomHook } from './01-useState/CounterWitchCustomHook';
import { SimpleForm } from './02-useEffect/SimpleForm';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWitchCustomHook /> */}
    <SimpleForm />
  </React.StrictMode>,
)
