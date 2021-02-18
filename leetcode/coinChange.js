const coinChange = (coins, amount) => {

  const minCoins = (coinsArr, left, memo) => {

    if (memo[left]) return memo[left];
    if (left === 0) return 0;
    if (left < 0) return amount+1;

    let num = amount+1;

    for (let coin of coinsArr) {
      num = Math.min(num, 1+minCoins(coinsArr, left - coin, memo))
    }

    memo[left] = num;

    return memo[left];
  }

  let res = minCoins(coins, amount, {}, 0)
  if (res > amount) return -1
  return res
}
