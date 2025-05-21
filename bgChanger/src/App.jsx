import { useState } from 'react'

function App() {

  let [color, setColor] = useState('#E6E6FA');

  return (
      <div className='w-[100vw] h-screen duration-200' style = {{backgroundColor: color}}>
        <div className='flex flex-wrap fixed justify-center items-center bottom-12 inset-x-0 px-2'>
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-3 rounded-xl">
            <button className='bg-red-500' onClick={()=>setColor("red")}>Red</button>
            <button className='bg-blue-500' onClick={()=>setColor("blue")}>Blue</button>
            <button className="bg-yellow-500" onClick={()=>setColor("yellow")}>Yellow</button>
            <button className="bg-emerald-500" onClick={()=>setColor("#50C878")}>Emerald</button>
            <button className="bg-purple-400" onClick={()=>setColor("#E6E6FA")}>Lavender</button>
            <button className='bg-red-300' onClick={()=>setColor("salmon")}>Salmon</button>
          </div>
        </div>
      </div>
  )
}

export default App
