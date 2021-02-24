const reorderList = (head) => {
  let start = head;
  let reorderedList = reverseList(head);
  let count = 0;
  let node = start;

  while(node){
    count++;
    node = node.next;
  }

  let res = new ListNode(0);

  for (let i=0; i<count; i++){
    if (i%2 === 1) {
      res.next = reorderedList;
      reorderedList = reorderedList.next;
    } else {
      res.next = start;
      start = start.next;
    }

    res = res.next
  }

  return res;
};

const reverseList = (head, prev=null) => {
  if (!head) return prev;

 let start = reverseList(head.next, head);
 head.next = prev;

  return start;
}