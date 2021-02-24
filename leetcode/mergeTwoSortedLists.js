const mergeTwoLists = (l1, l2, curr = new ListNode(0)) => {
  if (!l1 && !l2) return null;

  if (!l1 || !l2) {
    curr.next = l2 || l1;
  } else if (l1.val < l2.val) {
    curr.next = l1;
    mergeTwoLists(l1.next, l2, l1)
  } else if (l1.val >= l2.val) {
    curr.next = l2;
    mergeTwoLists(l1, l2.next, l2)
  }

  return curr.next;
}