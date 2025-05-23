import React, { useEffect } from 'react'

function TodoItem({taskName="Demo Task", isChecked, handleDelete, handleEdit, handleCheck}) {
//   useEffect(handleCheck, [isChecked]);
  return (
    <div>
        <div className='flex justify-between items-center bg-gray-800 w-full h-16 px-4'>
            <input type="checkbox" className='w-5 h-5 cursor-pointer mx-3 md:mx-5' onChange = {handleCheck} value={isChecked}/>
            <span className='text-white font-semibold text-lg' style={isChecked?{textDecoration:"line-through", color:"teal"}:{textDecoration:"none"}}>
                {taskName}</span>
            <div className='flex gap-2 md:gap-4'>
                <button className='bg-red-500 text-white font-semibold px-2 py-1 rounded-md
            cursor-pointer hover:brightness-90 transition-all' onClick={handleDelete}>
                Delete
            </button>
            <button className='bg-green-500 text-white font-semibold px-2 py-1 rounded-md
            cursor-pointer hover:brightness-90 transition-all' onClick={handleEdit}>
                Edit
            </button>
            </div>
        </div>
    </div>
  )
}

export default TodoItem