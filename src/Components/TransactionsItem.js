import React from "react";

import TransactionsDate from "./TransactionsDate";

import "./TransactionsItem.css";

const TransactionsItem = (props) => {
  return (
    <div className="transactions-item">
      <TransactionsDate date={props.date} />
      <div className="transactions-item__description">
        <h2>{props.merchant}</h2>
        <div className="transactions-item__price">AMOUNT: {props.amount} €</div>
        <div className="transactions-item__price">
          FEE: {props.fee.toFixed(2)} €
        </div>
        <div className="transactions-item__price">
          DISCOUNT: {props.discount.toFixed(2)} €
        </div>
      </div>
    </div>
  );
};

export default TransactionsItem;
