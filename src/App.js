import { useState } from "react";
import NewTransaction from "./Components/NewTransaction";
import Transactions from "./Components/Transactions";
import Header from "./Components/Header";
import * as Rules from "./Domain/Rules";

function App() {
  const [transactions, setTransactions] = useState([]);

  const applyRules = (transaction, count) => {
    const rules = [
      Rules.Charge,
      Rules.WeekendsDiscount,
      Rules.TeliaDiscount,
      Rules.CircleKDiscount,
      Rules.AdditionalDiscount,
    ];
    rules.forEach((rule) => rule(transaction, count));
  };

  const addTransactionHandler = (transaction) => {
    let merchantTransactionCount = transactions.filter(
      (item) => item.merchant === transaction.merchant
    ).length;
    applyRules(transaction, merchantTransactionCount);
    setTransactions((prevTransactions) => {
      return [transaction, ...prevTransactions];
    });
  };

  return (
    <div>
      <Header />
      <NewTransaction onAddTransaction={addTransactionHandler} />
      <Transactions items={transactions} />
    </div>
  );
}

export default App;
