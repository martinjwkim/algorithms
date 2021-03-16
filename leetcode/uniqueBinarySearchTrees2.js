const generateTrees = (n, start=0, memo={}) => {
  if (n-start === 0) return [null];
  if (n-start === 1) return [new ListNode(n)];

  let res = [];

  const buildTree = (num, high, low) => {
    let left = generateTrees(num-1, low, memo);
    let right = generateTrees(high, num, memo);
    let trees = [];

    for (let l of left){
      let node = new ListNode(num);
      node.left = l;
      for (let r of right) {
        node.right = r;
        trees.push(node)
      }
    }

    return trees;
  }

  for (let i=start+1; i<=n; i++) {
    res = res.concat(buildTree(i, n, start));
  }

  memo[n] = res;

  return memo[n];
}