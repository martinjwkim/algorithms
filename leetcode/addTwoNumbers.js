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
  let length = Math.floor(Math.log10(sum)) + 1;
  let res = new ListNode(sum%10);
  let curr = res;
  
  for (let i=1; i<length; i++){
      curr.next = new ListNode(Math.floor(sum / Math.pow(10, i)) % 10);
      curr = curr.next;
  }
  
  return res;
  
};

