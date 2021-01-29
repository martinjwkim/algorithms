/*
Given a collection of candidate numbers (candidates) and a target number (target), 
find all unique combinations in candidates where the candidate numbers sum to target.
Each number in candidates may only be used once in the combination.
Note: The solution set must not contain duplicate combinations.
*/

const combinationSum2 = (candidates, target) => {
  let res = [];
  let count = {};

  for (let i = 0; i < candidates.length; i++) {
    count[candidates[i]] = count[candidates[i]]+1 || 1;
  }

  function findSum(obj, arr, num) {
    if (num < 0) return;
    if (num === 0) {
      res.push(arr);
      return;
    }

    for (let element in obj) {
      if (obj[element] > 0) {
        console.log(obj, arr, element, num)
        findSum({...obj, [element]: obj[element]-1}, arr.concat([+element]), num-+element)
      }
    }
  }

  findSum(count, [], target);

  return res;
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))
// [1,1,2,5,6,7,10]