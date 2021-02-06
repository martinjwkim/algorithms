const addTwoNumbers = (l1, l2) => {

  function combineNodes(n1, n2, carryOver) {
    let val;
    let node;

    if (n1 && n2) {
      val = (n1.val + n2.val + carryOver) % 10
      node = new ListNode(val, combineNodes(n1.next, n2.next, Math.floor((n1.val + n2.val + carryOver) / 10)))
    } else if (n1) {
      val = (n1.val + carryOver) % 10
      node = new ListNode(val, combineNodes(n1.next, null, Math.floor((n1.val + carryOver) / 10)))
    } else if (n2) {
      val = (n2.val + carryOver) % 10
      node = new ListNode(val, combineNodes(null, n2.next, Math.floor((n2.val + carryOver) / 10)))
    } else if (carryOver) {
      node = new ListNode(carryOver);
    }

    return node;
  }

  return combineNodes(l1, l2, 0)
};