import React from "react";
import TransactionCard from "./transactionCard";

function TransactionHistory({income, setIncome, expense, setExpense, transactions, setTransactions }) {

    const handleDelete = (index) => {
        // Logic to delete the transaction
        console.log(`Deleting transaction at index: ${index}`);
        //updating the total balance
        transactions.forEach((transaction, i)=>{
            if(i===index){
                if(transaction.isIncome){
                    setIncome(income-transaction.amount);
                }
                else{
                    setExpense(expense-transaction.amount);
                }
            }
        })

        // setting up the new transactions array
        const newTransactions = transactions.filter((_, i) => i !== index);
        setTransactions(newTransactions);
    }


  return (
    <>
        <div className="w-[90%] mx-auto my-4 rounded-md md:w-2/3 h-76 overflow-y-scroll overflow-x-hidden border-2 border-blue-50">
        <h1 className="text-center text-2xl text-white font-semibold border-b-2 border-white">Transaction History</h1>
        {transactions.map((transaction, index) => (
            <TransactionCard
            key={index}
            index={index}
            handleDelete={handleDelete}
            transactionName={transaction.name}
            Amount={transaction.amount}
            isIncome={transaction.isIncome}
            />
        ))}
        </div>
    </>
  );
}

export default TransactionHistory;
