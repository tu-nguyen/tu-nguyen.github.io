import React from 'react'
import ReactDOM from 'react-dom/client'
// import { HashRouter as Router } from "react-router-dom";
import App from './App.tsx'
import './index.css'
// import './assets/js/main.js'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)
