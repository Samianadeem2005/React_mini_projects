import {useState} from 'react'

function App() {

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    
    setCounter(counter + 1)     
  }

  const removeValue = () => {
    if (counter==0){
      alert("Counter value cannot be negative")
    }
    else{
    setCounter(counter - 1)
    }
  }

  return (
    <>
     <h1>Chai aur react</h1>
     <h2>counter value: {counter}</h2>

     <button onClick={addValue}>Add value</button>
     <br />
     <button onClick={removeValue}>Remove value</button>
     </>
     )
}

export default App
