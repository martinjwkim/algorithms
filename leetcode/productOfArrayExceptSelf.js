const productExceptSelf = (nums) => {
  let res = [];
  let num;

  for (let i = 0; i < nums.length; i++) {
    num = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j){
        num*=nums[j]
      }
    }
    res.push(num);
  }
  return res;
}