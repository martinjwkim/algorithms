const isValidBST = (node, low = -Infinity, high = Infinity) => {
  if (!node) return true;
  if (node.val <= low) return false;
  if (node.val >= high) return false;

  return isValidBST(node.left, low, node.val) && isValidBST(node.right, node.val, high)
}