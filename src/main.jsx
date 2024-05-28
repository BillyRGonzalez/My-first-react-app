import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Greeting from './Greeting.jsx'
import { ComidaFavorita  } from './Comida.jsx'
import { Html  } from './HtmlToJsx.jsx'
import Button from './Button.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Greeting />
    <ComidaFavorita />
    <Html />
    <Button />
    <Button text="Don't Click Me!" color="red" />
    <Button fontSize={20} />
  </React.StrictMode>,
)
