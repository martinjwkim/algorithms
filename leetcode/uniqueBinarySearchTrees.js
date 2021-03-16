const numTrees = (n, memo = {}) => {
  if (n < 2) return 1;
  if (memo[n]) return memo[n];

  let count = 0;

  for (let i = 1; i <= n; i++) {
    count += numTrees(i - 1, memo) * numTrees(n - i, memo)
  }

  memo[n] = count;

  return memo[n];
}