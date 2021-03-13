const deleteDuplicates = (head) => {

  let res = new ListNode('#');
  res.next = head;

  const skipDuplicates = (node, prev) => {
    if (!node) return null;

    if (prev === node.val || node.next?.val === node.val ) {
      return skipDuplicates(node.next, node.val);
    }

    node.next = skipDuplicates(node.next, node.val)
    
    return node;
  }

  return skipDuplicates(res, '@').next;
}