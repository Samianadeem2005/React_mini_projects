import { useState, useCallback, useEffect , useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordGenerator = useCallback(() => {
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
  
    setPassword(pass)
  
  },[length,numberAllowed,charAllowed,setPassword])


  useEffect(()=>{
    passwordGenerator()

  },[length,numberAllowed,charAllowed,setPassword])

    //UseRef hook
  const passwordRef= useRef(null)
  
  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select()            
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md 
        rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-800">
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text' value={password} readOnly ref={passwordRef}
          className='outline-none w-full py-1 px-3 bg-white text-black' placeholder='Password' />
          <button onClick={copyToClipboard} className='bg-blue-500 hover:bg-blue-600 text-white py-1 px-3'>copy</button>
        </div>

        <div className= "flex text-sm gap-x-2">
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={20} value={length} className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}/><label> Length: {length}</label>
          </div>
          <input type="checkbox" defaultChecked={numberAllowed} onChange={()=>{setNumberAllowed((prev)=>!prev)}}></input>
          <label>Numbers</label>
          <input type="checkbox" defaultChecked={charAllowed} onChange={()=>{setcharAllowed((prev)=>!prev)}}></input>
          <label>Characters</label>
        </div>
        
      </div>
    </>
  )
}

export default App
