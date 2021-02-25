const isPalindrome = (s) => {
  let str = '';

  for (let char of s){
    let code = char.charCodeAt(0);
    if (code > 47 && code < 58){
      str += char;
    } else if (code > 64 && code < 91){
      str += char.toLowerCase();
    } else if (code > 96 && code < 123){
      str += char;
    }
  }

  for (let i=0; i<str.length/2; i++){
    if (str[i] !== str[str.length-1-i]) return false
  }

  return true;
}