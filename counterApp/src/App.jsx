import { useState } from 'react'

function App() {

  let [counter, setCounter] = useState(0);

  const inCount = ()=>{
    setCounter(counter+1);
    // setCounter(prevCount=> prevCount + 1); take a callback so that each function executes and not abort;
    // setCounter(prevCount=> prevCount + 1); take a callback so that each function executes and not abort;
    // setCounter(prevCount=> prevCount + 1); take a callback so that each function executes and not abort;
  }
  const deCount = ()=>{
    setCounter(counter-1);
  }

  return (
    <>
      <h1 className='text-3xl font-serif text-center mt-4 border-b-2'>Counter App</h1>
      <div className="counterDisplay w-[100vw] h-[25vh] text-4xl flex justify-center items-center">Counter: {counter}</div>
      <div className="flex w-[100vw] h-[20vh] justify-center items-center">
        {/* //this can be made a component */}
        <button onClick={inCount} className="h-12 bg-blue-500 text-amber-50 p-4 text-center m-4 rounded-md cursor-pointer hover:bg-blue-600">Increase Counter</button>
        <button onClick = {deCount} className="h-12 bg-blue-500 text-amber-50 p-4 text-center m-4 rounded-md cursor-pointer hover:bg-blue-600">Decreases Counter</button>
      </div>
      
    </>
  )
}

export default App
