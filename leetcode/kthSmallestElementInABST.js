const kthSmallest = (root, k) => {
  const traverse = (node, travelled) => {
    if (node.left){
      traverse(node.left, travelled)
    }
    travelled.push(node);
    if (node.right){
      traverse(node.right, travelled)
    }

    return travelled;
  }

  return traverse(root, [])[k-1].val;
}