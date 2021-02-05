const combine = function (n,k) {
  let res = [];

  function  findCombos(index, curr) {
    if (curr.length === k) {
      res.push(curr)
      return;
    }

    for (let i=index; i<=n; i++){
      findCombos(i+1, [...curr, i])
    }
  }

  findCombos(1,[]);

  return res;
}