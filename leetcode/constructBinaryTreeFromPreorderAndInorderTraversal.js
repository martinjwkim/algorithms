const buildTree = (preorder, inorder) => {
  if (!inorder.length) return null;

  let curr = preorder.shift();
  let index = inorder.indexOf(curr);
  
  let node = new TreeNode(curr);

  node.left = buildTree(preorder, inorder.slice(0,index));
  node.right = buildTree(preorder, inorder.slice(index+1, inorder.length));

  return node;
}