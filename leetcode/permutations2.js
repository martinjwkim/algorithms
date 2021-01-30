const permuteUnique = (nums) => {
  let res = [];
  let count = {};

  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] = count[nums[i]]+1 || 1;
  }


  function findPermutations(obj, curr) {

    if (curr.length === nums.length){
      res.push(curr);
      return;
    }

    for (let element in obj){
      if (obj[element] > 0){
        findPermutations({...obj, [element]: obj[element]-1}, curr.concat(element))
      }
    }
  }

  findPermutations(count, []);
  return res;
};

console.log(permuteUnique([1,1,2]))