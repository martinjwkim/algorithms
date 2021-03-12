const getPermutation = (n, k) => {
  const factorial = (num) => {
    if (num === 1) return 1;
    return num * factorial(num-1)
  }

  let numPermutations = factorial(n);
  let permutations = [];

  let nums = new Set();

  for (let i=1; i<=n; i++){
    nums.add(i);
  }

  const findPermutations = (numsSet, curr) => {
    if (!numsSet.size){
      permutations.push(curr);
      return;
    }

    for (let i=1; i<=n; i++){
      if (numsSet.has(i)){
        numsSet.delete(i);
        findPermutations(numsSet, curr+`${i}`)
        numsSet.add(i);
      }
    }
  }

  findPermutations(nums, '')

  return permutations[k-1];
}
