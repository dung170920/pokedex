import React from 'react'
import ReactDOM from 'react-dom/client'
import 'src/assets/scss/main.scss'
import App from 'src/App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
