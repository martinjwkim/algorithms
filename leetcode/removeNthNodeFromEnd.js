let removeNthFromEnd = function(head,n){

  //calculate length
  let current = head;
  let length = 1;
  while (current.next){
    length++;
    current = current.next;
  }

  if (length === n) return head.next

  current = head;
  let count = 0;
  let prev;

  while(true){
    if (count === length-n){
      prev.next = current.next;
      break;
    }
    prev = current;
    current = current.next;
    count++;
  }

  return head;
}