const countSubstrings = (s) => {

  const countFromIndex = (str, idx) => {
    let curr = '';
    let count = 0;

    for (let i=idx; i<str.length; i++){
      curr += str[i];
      if (isPalindrome(curr)) count++
    }

    return count;
  }

  const isPalindrome = (str) => {
    for (let i=0; i<str.length/2; i++){
      if (str[i] !== str[str.length-1-i]) return false
    }

    return true;
  }

  let res = 0;

  for (let i=0 ; i < s.length; i++){
    res += countFromIndex(s, i)
  }

  return res;
}

const countSubstrings = (s) => {

  const countFromCenter = (str, left, right) => {
    let count = 0;

    while (str[left] === str[right] && left>=0 && right<str.length){
      count++;
      left--;
      right++;
    }

    return count;
  }
  
  let res = 0;

  for (let i=0; i<s.length; i++){
    res += countFromCenter(s, i, i);
  }

  for (let i=.5; i<s.length-1; i++){
    res += countFromCenter(s, i-0.5, i+0.5);
  }

  return res;
}