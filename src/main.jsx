import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const day = localStorage.getItem("day");

if (day == "light") {
  import('./scss/styles-light.scss')
} else if (day == "night") {
  import('./scss/styles-night.scss')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
