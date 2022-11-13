export const Charge = (transaction) => {
  transaction.fee = transaction.amount * 0.01;
};

export const WeekendsDiscount = (transaction) => {
  let day = transaction.date.getDay();
  let isWeekend = day === 0 || day === 6;
  if (isWeekend) {
    transaction.fee = 0;
  }
};

export const TeliaDiscount = (transaction) => {
  if (transaction.merchant === "TELIA") {
    transaction.discount = transaction.fee * 0.1;
    transaction.fee = transaction.fee - transaction.discount;
  }
};

export const CircleKDiscount = (transaction) => {
  if (transaction.merchant === "CIRCLE_K") {
    transaction.discount = transaction.fee * 0.2;
    transaction.fee = transaction.fee - transaction.discount;
  }
};

export const AdditionalDiscount = (
  transaction,
  sameMerchantTransactionCount
) => {
  if (sameMerchantTransactionCount > 10) {
    transaction.discount = transaction.discount + transaction.fee * 0.2;
    transaction.fee = transaction.fee - transaction.discount;
  }
};
