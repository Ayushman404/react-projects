import React from "react";

function TransactionInput({handleAddTransaction,selectedRadio, onRadioChange, tNameRef, tAmountRef}) {
  return (
    <div className="flex flex-col gap-4 m-auto border-2 border-blue-200 justify-center items-center bg-transparent p-4 rounded-md w-[75%]">
      <h2 className="text-2xl font-semibold text-blue-100 tracking-wide">
        Add New Transaction
      </h2>
      <form className="flex flex-col gap-4 m-auto">
        <input
          type="text"
          ref={tNameRef}
          placeholder="Enter Transaction Name"
          className="p-2 rounded-md text-black bg-blue-100 md:w-110"
        />
        <div className="flex gap-3 items-center">
          <input
            type="number"
            ref={tAmountRef}
            placeholder="Enter Amount"
            className="p-2 h-12 rounded-md text-black
                 bg-blue-100 w-1/2 md:w-55"
          />
          <div className="flex flex-col gap-2">
            <label htmlFor="transactionType" className="text-white">
              Transaction Type
            </label>
            <div>
              <input
                type="radio"
                name="transactionType"
                id="income"
                className="w-4 h-4"
                checked = {selectedRadio === "income"}
                onChange={onRadioChange}
              />
              <label htmlFor="income" className="text-white ml-2">
                Income
              </label>
            </div>

            <div>
              <input
                type="radio"
                name="transactionType"
                id="expense"
                className="w-4 h-4"
                checked = {selectedRadio === "expense"}
                onChange={onRadioChange}
              />
              <label htmlFor="expense" className="text-white ml-2">
                Expense
              </label>
            </div>
          </div>
        </div>

        <button onClick = {handleAddTransaction} className="cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-400 text-white p-2 rounded-md">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default TransactionInput;
