import { useState } from 'react'

import './App.css'

function App() {

  let [counter , setCounter] = useState(15) // it is Hook
   
 

  let add = ()=>{
    setCounter(counter+1); 
  }
  let remove =()=>{
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Learing React {counter} </h1>
      <h2>Counter value {counter}</h2>
      <button onClick={add}>Add value </button>
      <button onClick={remove}>Remove value </button>
      <p>footer{counter}</p> 
    </>
  )
}

export default App
