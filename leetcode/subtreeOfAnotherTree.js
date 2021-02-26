const isSubtree = (s, t) => {
  if(!s) return false;
  if (s.val === t.val) {
    if (isSameTree(s, t)) return true;
  }

  return isSubtree(s.left, t) || isSubtree(s.right, t)
}

const isSameTree = (p, q) => {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}