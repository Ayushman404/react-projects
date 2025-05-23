import { useState, useRef } from "react";
import TransactionInput from "./components/transactionInput";
import TransactionHistory from "./components/transactionHistory";

function App() {
  const [balance, setBalance] = useState(0);
  const [selectedRadio, setSelectedRadio] = useState("income");

  const tNameRef = useRef(null);
  const tAmountRef = useRef(null);

  function handleAddTransaction(e) {
    e.preventDefault();
    console.log("Adding transactions...");
    console.log(tNameRef.current.value);
  }

  const handleRadioChange = (e) => {
    setSelectedRadio(e.target.id);
  };

  return (
    <>
      <header
        className="text-white text-4xl font-bold tracking-wider text-center
      my-4 bg-linear-to-r from-cyan-500 to-blue-500"
      >
        Mini Expense Tracker
      </header>

      <span className="text-2xl block m-4 font-semibold text-blue-100 tracking-wide">
        Total Balance: {balance}
      </span>

      <TransactionInput
        handleAddTransaction={handleAddTransaction}
        tNameRef={tNameRef}
        tAmountRef={tAmountRef}
        selectedRadio={selectedRadio}
        onRadioChange = {handleRadioChange}
      />

      <TransactionHistory />
    </>
  );
}
export default App;
