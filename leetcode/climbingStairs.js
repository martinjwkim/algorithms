const climbStairs = (n) => {

  function climb (num, memo){
    if (memo[num]) return memo[num];
    if (num === 0) return 1;
    if (num < 0) return 0;

    memo[num] = climb(num-1, memo) + climb(num-2, memo);

    return memo[num]
  }

  return climb(n, {});
}