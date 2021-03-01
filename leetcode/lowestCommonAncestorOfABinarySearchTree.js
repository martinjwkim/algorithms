const lowestCommonAncestor = (root, p, q) => {
  const traverse = (curr, target, travelled) => {
    travelled[curr.val] = true;
    if (curr === target) return travelled;

    return curr.val<target.val ? traverse(curr.right, target, travelled) : traverse(curr.left, target, travelled)
  }

  const findLowest = (curr, target, travelled, lowest) => {
    if (travelled[curr.val] !== undefined) lowest = curr
    if (curr === target) return lowest

    return curr.val<target.val ? findLowest(curr.right, target, travelled, lowest) : findLowest(curr.left, target, travelled, lowest)
  }

  let travelled = traverse(root, p, {});
  let res = findLowest(root, q, travelled);

  return res;
}