const generateTrees = (n, start=0, memo={}) => {
  if (n-start === 0) return [null];
  if (n-start === 1) return [new TreeNode(n)];
  if (memo?.n?.start) return memo[n][start];

  let res = [];

  const buildTree = (num, high, low) => {
    let left = generateTrees(num-1, low, memo);
    let right = generateTrees(high, num, memo);

    let trees = [];

    for (let l of left){
      for (let r of right) {
        let node = new TreeNode(num);
        node.left = l;
        node.right = r;
        trees.push(node)
      }
    }

    return trees;
  }

  for (let i=start+1; i<=n; i++) {
    res = res.concat(buildTree(i, n, start));
  }

  if (!memo[n]) memo[n]={};
  memo[n][start] = res;

  return memo[n][start];
}