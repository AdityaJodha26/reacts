import { useState  , useCallback, useEffect , useRef} from 'react'
import './App.css'


function App() {
  const [length , setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password , setPassword] = useState('')

  const passwordRef = useRef(null)
  const generatePassword = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numberAllowed){
      str+="123456789"

    }
    if(charAllowed){
      str+="!@#$%&*?"
    }

    for( let i = 0 ; i< length ; i++){
      const char = Math.floor(Math.random()*str.length +1)
      pass += str.charAt(char)
    }

    setPassword(pass)
    
  },[length , numberAllowed , charAllowed])

  useEffect(()=>{
    generatePassword()
  } , [generatePassword])

  const copyToClipboard = ()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }
  


  return (
  
    <div className="flex flex-col h-screen items-center justify-center  text-black border-black border-5px  bg-white">
      <h1 className="text-black  text-center p-5 text-2xl">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input ref={passwordRef} type="text" value={password}className="outline-none w-full py-2 px-3" placeholder="Password" readOnly className="bg-white-100 shadow-2xl text-gray-400"></input>
        <button  onClick={copyToClipboard} className="outline-none bg-blue-600 text-white px-3 py -0.5">Copy</button>
      </div>

      <div className="flex items-center gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={7}
            max={15}
            value={length}
            className="cursor-pointer w-20"
            onChange={(e) => setLength(Number(e.target.value))}
            id="length"
          />

          <label htmlFor="length">
            Length: {length}
          </label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={numberAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />

          <label htmlFor="numberInput">
            Numbers
          </label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={charAllowed}
            id="characterInput"
            onChange={() => setCharAllowed((prev) => !prev)}
          />

          <label htmlFor="characterInput">
            Characters
          </label>
        </div>
      </div>
      
    </div>
  
  
)}

export default App
