//MEDIUM

var longestPalindrome = function (s) {

  let max=1;
  let maxStart=0;

  for (let i=0; i<s.length; i++){
    for (let j=i+1;j<s.length; j++){
      if(s[i]===s[j]){
        if (isPalindrome(s.slice(i,j+1))){
          if (j+1-i>max){
            max = j+1-i;
            maxStart = i;
          }
        }
      }
    }
  }

  return s.slice(maxStart,maxStart+max);
};

function isPalindrome(s){
  if (s.split("").reverse().join("") === s) return true;
  
  return false;
}

console.log(longestPalindrome("dfaracecarfkmd"))