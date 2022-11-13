import React from "react";

import TransactionForm from "./TransactionsForm";
import "./NewTransaction.css";

const NewTransaction = (props) => {
  const saveTransactionsDataHandler = (enteredTransactionData) => {
    const transactionsData = {
      ...enteredTransactionData,
      id: Math.random().toString(),
    };

    props.onAddTransaction(transactionsData);
  };

  return (
    <div className="new-transaction">
      <TransactionForm onSaveTransactionData={saveTransactionsDataHandler} />
    </div>
  );
};

export default NewTransaction;
