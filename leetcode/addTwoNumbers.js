var addTwoNumbers = function(l1, l2) {
  
  function sumList(l){
    let multiplier = 0;
    let current = l;
    let sum = 0;
    while (current){
      sum += current.val * (10 ** multiplier)
      current = current.next
      multiplier++
    }
    
    return sum;
  }
  
  let sum = sumList(l1) + sumList(l2);
  let sumArr = sum.toString().split("").reverse();
  let res;
  
  for (let i=0; i<sumArr.length; i++){
      if (i===0) {
          res = new ListNode(sumArr[i])
      } else {
          res.next = new ListNode(sumArr[i])
      }
  }
  
  return res;
  
};

