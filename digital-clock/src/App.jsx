import { useState, useEffect } from 'react'


function App() {
  const [time, setTime] = useState((new Date()).toLocaleTimeString());

  // function addLeadingZeros(time){
  //   const timeString = String(time);
  //   return timeString.padStart(2, "0");
  // }

  useEffect(()=>{
    const timeInterval = setInterval(()=>setTime((new Date).toLocaleTimeString()),
  1000)

    // return clearInterval(timeInterval);
  }, [time, setTime])

  return (
    <div className='w-full h-screen bg-green-200 rounded-xl p-4'>
      <h1 className='text-5xl text-green-800 font-semibold font-serif
       text-center m-5 tracking-wide'>Digital Clock</h1>

       <div className='flex justify-center items-center w-45 h-55
        m-auto'>

        <span className='text-3xl text-green-800 font-serif'>{time}</span>
       </div>
    </div>
  )
}

export default App
