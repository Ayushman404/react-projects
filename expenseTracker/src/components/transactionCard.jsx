import React from 'react'

function TransactionCard({transactionName, Amount, isIncome, index, handleDelete}) {
  return (
    <div className='w-[96.5%] h-14 m-2 flex items-center gap-2 px-3 bg-gray-300 rounded-md'>
        <span className='w-[75%] ml-4 md:ml-7 flex items-center text-black font-semibold'>{transactionName}</span>
        <span className='w-[25%] flex justify-center items-center font-semibold text-green-600'
              style={isIncome ? {color:"green"}:{color:"red"}}>${Amount}</span>
        <button className='px-2 py-1 h-10 text-white bg-red-500 rounded-md font-semibold
        hover:bg-red-600 cursor-pointer'
        onClick={(e)=>handleDelete(index)}>Delete</button>
    </div>
  )
}

export default TransactionCard