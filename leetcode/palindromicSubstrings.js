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