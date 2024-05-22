import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Greeting from './Greeting.jsx'
import { ComidaFavorita  } from './Comida.jsx'
import { Html  } from './HtmlToJsx.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greeting />
    <ComidaFavorita />
    <Html />
  </React.StrictMode>,
)
