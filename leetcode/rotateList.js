const rotateRight = (head, k) => {
  if (!head) return head;
  let len = 1;
  let curr = head;

  while (curr.next){
    len++;
    curr = curr.next;
  }

  curr.next = head;
  curr = curr.next;

  let j = k%len;

  for (let i=0; i<len-j; i++){
     curr = curr.next;
  }

  let res = curr;

  for (let i=1; i<len; i++){
    curr = curr.next;
  }

  curr.next = null;

  return res;
}
