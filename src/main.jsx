import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' 
import App from './App' 
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Hanya merender App, yang kini berisi semua Routes */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
