const reorderList = (head) => {
  let left = true;

  let arr = [];
  let curr = head;

  while (curr){
    arr.push(curr);
    curr = curr.next;
  }

  let start = new ListNode(0);
  let node;
  curr = start;

  while (arr.length){
    curr.next = left ? arr.shift() : arr.pop()
    left = !left;
    curr = curr.next;
  }

  curr.next = null;

  return start.next;
};