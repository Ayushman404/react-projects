import { useState, useRef, useEffect } from "react";
import TransactionInput from "./components/transactionInput";
import TransactionHistory from "./components/transactionHistory";
import TranscationCard from "./components/transactionCard";

function App() {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState("income");

  const tNameRef = useRef(null);
  const tAmountRef = useRef(null);

  function handleAddTransaction(e) {
    e.preventDefault();
    // console.log(`Adding transactions... ${selectedRadio} and ${tNameRef.current.value}`);
    if(selectedRadio == "income"){
      setIncome(income + Number(tAmountRef.current.value));
      setTransactions([...transactions, {name: tNameRef.current.value, amount: Number(tAmountRef.current.value), isIncome: true}]);
    }
    else{
      setExpense(expense + Number(tAmountRef.current.value));
      setTransactions([...transactions, {name: tNameRef.current.value, amount: Number(tAmountRef.current.value), isIncome: false}])
    }
    tAmountRef.current.value = null;
    tNameRef.current.value = "";
  }
  console.log(`${income} and ${expense}`);


  const handleRadioChange = (e) => {
    setSelectedRadio(e.target.id);

  };

  return (
    <>
      <header
        className="text-white text-4xl font-bold tracking-wider text-center
        my-4 border-b-2 py-2"
      >
        Mini Expense Tracker
      </header>

      <span className="text-4xl font-serif text-center my-6 block mx-4 font-semibold
      text-blue-100 tracking-wide">
        Total Balance: {income-expense}
      </span>

      <TransactionInput
        handleAddTransaction={handleAddTransaction}
        tNameRef={tNameRef}
        tAmountRef={tAmountRef}
        selectedRadio={selectedRadio}
        onRadioChange = {handleRadioChange}
      />

      <TransactionHistory income = {income} setIncome = {setIncome} expense={expense} setExpense={setExpense} transactions={transactions} setTransactions={setTransactions}/>
    </>
  );
}
export default App;
