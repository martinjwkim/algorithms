const isValid = (s) => {
  let obj = {'[':']','{':'}','(':')'}
  let stack = [];

  for (let char of s) {
    if (!stack.length && !obj[char]) return false;
    if (obj[char]) {
      stack.push(obj[char])
    } else {
      if (stack.pop() !== char) return false;
    }
  }

  return stack.length ?  false :  true;
}