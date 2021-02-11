const maxProfit = (prices) => {
  let profit = 0;
  let min = prices[0];

  for (let price of prices){
    profit = Math.max(profit, price-min)
    min = Math.min(min, price)
  }

  return profit;
}