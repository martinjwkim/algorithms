const numTrees = (n, memo={}) => {
  if (n < 2) return 1;
  if (memo[n]) return memo[n];

  let count = 0;

  const findCombos = (curr, num) => {
    let left = numTrees(curr-1, memo);
    let right = numTrees(num-curr, memo);

    return left*right
  }

  for (let i=1; i<=n; i++) {
    count+=findCombos(i, n);
  }

  memo[n] = count;

  return memo[n];
}