import React from 'react'

function TodoInput({handleAdd, inputRef}) {
  return (
    <div className='w-full flex justify-around px-4 items-center h-16
     bg-gray-800'>

        <span className='text-2xl text-white font-bold tracking-wide'>ToDo</span>
        <div className="flex w-85 h-10 md:w-115 justify-evenly items-center">
            <input
                className='inputText w-[60%] h-full bg-slate-400 rounded-lg px-2 text-black'
                placeholder='Add a task...'
                ref={inputRef}
            />

            <button className='bg-teal-500 text-white font-semibold px-2 py-2 rounded-md
            cursor-pointer hover:brightness-90 transition-all' onClick={handleAdd}>
                Add Task</button>
        </div>
        
    </div>
  )
}

export default TodoInput;