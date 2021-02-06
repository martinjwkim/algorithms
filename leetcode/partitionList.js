const partition =  (head, x) =>  {
  let arr = [];

  function connectNext(curr, x){
    let node;

    if (curr && curr.val <= x)  {
      node = curr;
      node.next = connectNext(node.next);
    } else if (curr && curr.val > x){
      arr.push(curr);
      node = connectNext(node.next)
    } else if (arr.length){
      node = arr.shift();
      node.next = connectNext()
    } else {
      return null;
    }

    return node;
  }

  return connectNext(head, x)
}