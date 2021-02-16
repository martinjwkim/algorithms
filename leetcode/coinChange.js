const coinChange = (coins, amount) => {
  let res = amount+1;

  function change(left, count) {
    if (left === 0) {
      res = Math.min(res, count)
      return;
    }
    if (left < 0) {
      return;
    }
    for (let coin of coins) {
      change(left-coin, count+1)
    }
  }

  change(amount, 0)

  if (res > amount) return -1;
  return res;
}