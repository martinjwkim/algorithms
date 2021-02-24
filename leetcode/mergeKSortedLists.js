const mergeKLists = (lists, curr = new ListNode(0)) => {

  let nums = lists.map(list=>list ? list.val : Infinity)
  let min = Math.min(...nums)
  let minIndex = min === Infinity ? -1 : nums.indexOf(min);
  
  if (minIndex < 0) return null;

  let node = lists[minIndex];
  curr.next = node;
  lists[minIndex] = lists[minIndex] ? lists[minIndex].next : null;
  mergeKLists(lists, node)

  return node;
}