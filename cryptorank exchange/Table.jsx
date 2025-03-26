import React from "react";
import { cryptocurrencyList } from "../cryptocurrency-list";

function Table({ moneyToExchange, isError, hasTyped }) {

  const computeExchangeRate = (coin) => {
    let computedAmount = '0.00000000';
    if (isError && hasTyped) {
      computedAmount = 'n/a';
    }
    else if (!isError && hasTyped) {
      computedAmount = String(Math.round(coin.rate * moneyToExchange * 10**8) / 10**8);
    };
    return computedAmount;
  };


  return (
    <div className="card card-text mt-10 mx-4">
      <table className="mb-0">
        <thead>
          <tr>
            <th>Cryptocurrency</th>
            <th>Exchange Rate</th>
            <th>Number of Coins</th>
          </tr>
        </thead>
        <tbody data-testid="exchange-data">
          {cryptocurrencyList.map((coin, idx) => (
            <tr key={idx}>
              <td>{coin.name}</td>
              <td>1 USD = {coin.rate}</td>
              <td>{computeExchangeRate(coin)}</td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;