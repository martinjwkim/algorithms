const reorderList = (head) => {
  let left = true;

  let arr = [];
  let curr = head;

  while (curr){
    arr.push(curr);
    curr = curr.next;
  }

  let start = new ListNode(0);
  let i=0;
  let len=0;
  curr = start;

  while (len<arr.length){
    if (left){
      curr.next = arr[0+i];
    } else {
      curr.next = arr[arr.length-1-i]
      i++
    }

    len++;
    left = !left;
    curr = curr.next;
  }

  curr.next = null;

  return start.next;
};