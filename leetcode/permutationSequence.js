const getPermutation = (n, k) => {

  let numsArr = [];

  for (let i=1; i<=n; i++){
    numsArr.push(`${i}`);
  }

  const permute = (i, j, nums) => {
    if (!nums.length) return '';

    const factorial = (num) => {
      if (num === 1) return 1;
      return num * factorial(num-1)
    }
  
    let numPermutations = factorial(i);

    let numEach = numPermutations/i;
    let n = Math.floor(j/numEach);

    return nums.splice(n,1) + permute(i-1, j%numEach, nums);
  }

  return permute(n, k-1, numsArr)
}
