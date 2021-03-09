const longestConsecutive = (nums) => {
  let neg = Math.min(...nums) < 0 ? true : false;
  let obj = {};
  let res = nums.length ? 1 : 0;
  let curr, prev;

  for (let num of nums) {
    if (neg) {
      obj[num-Math.min(...nums)] = true
    } else {
      obj[num] = true;
    }
  }

  for (let num in obj) {
    if (+num === +prev+1){
      curr++;
      res = Math.max(res, curr)
    } else {
      curr = 1;
    }

    prev = num;
  }

  return res;
}