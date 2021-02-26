const maxDepth = (root) => {

  const traverse = (node) => {
    if (!node) return 0;

    return Math.max(traverse(node.left), traverse(node.right)) + 1;
  }

  return traverse(root);
}