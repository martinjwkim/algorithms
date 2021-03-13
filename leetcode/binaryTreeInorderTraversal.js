const inorderTraversal = (root, data=[]) => {
  if (!root) return data;

  if (root.left) {
    inorderTraversal(root.left, data);
  }

  data.push(root.val);

  if (root.right) {
    inorderTraversal(root.right, data);
  }

  return data;
}