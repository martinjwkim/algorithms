const reverseList = (head, prev=null) => {
  if (!head) return prev;

 let start = reverseList(head.next, head);
 head.next = prev;

  return start;
}