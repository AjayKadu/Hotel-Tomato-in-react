import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StroreContextProvider from './context/StoreContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter >
    <StroreContextProvider>
      <App />
    </StroreContextProvider>
  </BrowserRouter>

)
