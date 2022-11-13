import React, { useState } from "react";
import "./TransactionsForm.css";

const TransactionsForm = (props) => {
  const today = new Date().toISOString().split("T")[0];
  const [enteredMerchent, setEnteredMerchent] = useState("CIRCLE_K");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState(today);

  const merchentChangeHandler = (event) => {
    setEnteredMerchent(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const transactionsData = {
      merchant: enteredMerchent,
      amount: enteredAmount,
      date: new Date(enteredDate),
      fee: 0,
      discount: 0,
    };

    console.log(typeof transactionsData.amount);

    props.onSaveTransactionData(transactionsData);

    setEnteredAmount("");
    setEnteredDate(today);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-merchent__controls">
        <div className="new-merchent__control">
          <label>Merchent</label>
          <select value={enteredMerchent} onChange={merchentChangeHandler}>
            <option value="CIRCLE_K">CIRCLE_K</option>
            <option value="TELIA">TELIA</option>
            <option value="7-ELEVEN">7-ELEVEN</option>
          </select>
        </div>
        <div className="new-transaction__control">
          <label>Amount</label>
          <input
            type="number"
            required
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-transaction__control">
          <label>Date</label>

          <input
            type="date"
            required
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-transaction__actions">
        <button type="submit">Add Transaction</button>
      </div>
    </form>
  );
};

export default TransactionsForm;
