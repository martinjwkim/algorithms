/*
Given an array of distinct integers candidates and a target integer target, 
return a list of all unique combinations of candidates where the chosen numbers sum to target. 
You may return the combinations in any order.
The same number may be chosen from candidates an unlimited number of times. 
Two combinations are unique if the frequency of at least one of the chosen numbers is different.
It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
*/

const combinationSum = (candidates, target)  => {
  let res = [];

  function findSum(i, s, t){
    let curr;
    if (t === 0) {
      res.push(s);
      return;
    }
    if (t<0) return;
    for (let j=i; j<candidates.length; j++){
      curr = candidates[j];
      findSum(j,s.concat([curr]),t-curr);
    }
  }

  findSum(0,[],target);

  return res;
}