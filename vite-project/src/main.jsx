import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
//import { UseStateBasic } from './UseStateBasic.jsx'
//import { UseStateExample } from './UseStateExample.jsx'
import { UseEffectExample } from './UseEffectExample.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />
    <UseStateBasic />
    <UseStateExample />*/}
    <UseEffectExample />
  </React.StrictMode>,
)
