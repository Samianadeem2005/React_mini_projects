import './App.css'
import { useState } from 'react'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card username="samia" />
      <Card  />
    </>
  )
}
  
export default App
