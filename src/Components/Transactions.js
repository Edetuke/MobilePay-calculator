import React, { Fragment } from "react";

import TransactionsItem from "./TransactionsItem";

import "./Transactions.css";

const Transaction = (props) => {
  return (
    <Fragment>
      {props.items.map((transaction) => (
        <TransactionsItem
          key={transaction.id}
          merchant={transaction.merchant}
          amount={transaction.amount}
          date={transaction.date}
          fee={transaction.fee}
          discount={transaction.discount}
        />
      ))}
    </Fragment>
  );
};

export default Transaction;
