var convert = function (s, numRows) {

  let arr = Array.from({ length: numRows }, () => []);
  let queue = s.split("");
  let count = 0;
  let secondCount = 0;

  while (queue.length) {

    if (count < numRows) {
      arr[count % numRows].push(queue.shift())
    } else if (count >= numRows && secondCount < numRows - 2) {
      arr[count % numRows].push("")
      secondCount++;
    } else {
      arr[count % numRows].push(queue.shift())
      secondCount = 0;
    }

    count++

    if (count === (numRows*(numRows-1))) {
      count = 0;
      secondCount = 0;
    }
  }


  return [].concat(...arr).join("")
};