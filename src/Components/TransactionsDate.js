import React from "react";

import "./TransactionsDate.css";

const TransactionsDate = (props) => {
  const month = props.date?.toLocaleString("en-US", { month: "long" });
  const day = props.date?.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date?.getFullYear();

  return (
    <div className="transactions-date">
      <div className="transactions-date__month">{month}</div>
      <div className="transactions-date__year">{year}</div>
      <div className="transactions-date__day">{day}</div>
    </div>
  );
};

export default TransactionsDate;
