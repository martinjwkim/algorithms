const maxPathSum = (root) => {

  let max = root.val;

  const search = (node) => {
    if (!node) return -Infinity;

    let leftSum = search(node.left);
    let rightSum = search(node.right);

    let sum = Math.max(leftSum + node.val, rightSum + node.val, node.val)

    max = Math.max(max, leftSum + rightSum + node.val, sum)

    return sum;
  }

  max = Math.max(search(root), max);

  return max;
}