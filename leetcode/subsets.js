const subsets = (nums) => {
  let res = [];

  function findCombos(numsArr, index, curr) {
    res.push(curr);

    for (let i = index; i < numsArr.length; i++) {
      findCombos(numsArr, i + 1, [...curr, numsArr[i]])
    }
  }
  findCombos(nums, 0, [])
  return res;
}