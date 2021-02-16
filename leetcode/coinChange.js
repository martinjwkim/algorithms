const coinChange = (coins, amount) => {
  let coinsSorted = coins.sort((a,b) => b-a);

  function change(coinsArr, rem, memo) {
    if (memo[rem]) return memo[rem];
    if (rem === 0) return 0;
    if (rem < 0) return;

    for (let coin of coinsArr){
      if (!memo[rem]){
        let res = 1 + change(coinsArr, rem-coin, memo);
        if (res) memo[rem] = res;
      }
    }

    if (!memo[rem]) memo[rem] = -1;

    return memo[rem];
  }

  return change(coinsSorted, amount, {})
}
