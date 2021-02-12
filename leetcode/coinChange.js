const coinChange = (coins, amount) => {
  function change(left, memo) {

    let min = Infinity;

    for (let coin of coins) {
      min = Math.min(min, change(left-coin, memo));
    }

    memo[left] = min;
    
    return memo[left];
  }

  return change(amount, {})
}