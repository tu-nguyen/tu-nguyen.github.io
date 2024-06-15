import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Tu Nguyen</h1>
      <div className="card">

        <h3><strong>Full Stack Software Engineer</strong></h3>
        <h4><strong>Portfolio</strong>  under construction (Updating to use React + Vite + Tailwind) <br /><a href="./v1/index.html">click here</a> to view old version</h4>
      </div>
    </>
  )
}

export default App
