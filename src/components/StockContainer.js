import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, addStock }) {

  const stocksArray = stocks.map(stock => <Stock stock={ stock } key={ stock.id } addStock={ addStock }/>)

  return (
    <div>
      <h2>Stocks</h2>
      { stocksArray }
    </div>
  );
}

export default StockContainer;
