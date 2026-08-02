import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Learing React </h1>
      <h2>Counter value</h2>
      <button>Add value</button>
      <button>Remove value</button>
      <p>footer</p> 
    </>
  )
}

export default App
