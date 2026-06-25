import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className = "w-full h-screen duration-200"
      style={{ backgroundColor: color }}>

      <div className="">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("red")} className="outline-none text-white shadow-lg" style={{ backgroundColor: "red" }}>button 1</button>
          <button onClick={() => setColor("blue")} className="outline-none text-white shadow-lg" style={{ backgroundColor: "blue" }}>button 2</button>
          <button onClick={() => setColor("green")} className="outline-none text-white shadow-lg" style={{ backgroundColor: "green" }}>button 3</button>
          <button onClick={() => setColor("yellow")} className="outline-none text-white shadow-lg" style={{ backgroundColor: "yellow" }}>button 4</button>
        </div>
      </div>
     
    </div>
  )               
}

export default App
