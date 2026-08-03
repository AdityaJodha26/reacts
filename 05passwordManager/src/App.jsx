import { useState } from 'react'
import './App.css'


function App() {
  const [length , setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password , setPassword] = useState('')


  return (
    <div className="w-full max-w-md mx-auto text-orange-500 bg-gray-700">
      <h1 className="text-white  text-center">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text" value="password" className="outline-none w-full py-1 px-3" placeholder="password" readOnly className="bg-white-100"></input>
        <button className="outline-none bg-blue-600 tex-white px-3 py -0.5"></button>
      </div>

      
    </div>
  )
}

export default App
