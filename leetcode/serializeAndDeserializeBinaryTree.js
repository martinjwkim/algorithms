const serialize = (root, n=0, data=[]) => {
  if (!root) return JSON.stringify(data);

  data[n] = root.val;

  serialize(root.left, 2*n+1, data)
  serialize(root.right, 2*n+2, data)

  return JSON.stringify(data);
}

const deserialize = (data, n=0, vals=JSON.parse(data)) => {
  if (n>vals.length-1) return null;
  if (!vals[n] && vals[n]!==0) return null;

  let node = new TreeNode(vals[n]);
  node.left = deserialize(data, 2*n+1, vals);
  node.right = deserialize(data, 2*n+2, vals);

  return node;
}