const levelOrder = (root) => {

  const traverse = (curr, level, arr) => {
    if (!curr) return arr;
    if (arr[level]){
      arr[level].push(curr.val);
    } else {
      arr[level] = [curr.val];
    }
    traverse(curr.left, level+1, arr);
    traverse(curr.right, level+1, arr);

    return arr;
  }

  return traverse(root, 0, [])
};