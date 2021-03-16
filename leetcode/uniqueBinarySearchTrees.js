const numTrees = (n) => {
  if (!n) return 0;
  let count = 0;
  let numSet = new Set();

  for (let i = 1; i <= n; i++) {
    numSet.add(i);
  }

  const findCombos = (nums, left, right) => {
    if (!nums.size){
      count++;
      return;
    }

    nums.forEach(num => {
      nums.delete(num);

      if (num > right && num > left){
        findCombos(nums, left, num)
      } else if (num < right && num > left) {
        findCombos(nums, num, right)
      }

      nums.add(num)
    })
  }

  for (let i=1; i<=n; i++){
    numSet.delete(i);
    findCombos(numSet, i, i);
    numSet.add(i);
  }

  return count;
}