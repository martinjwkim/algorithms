//MEDIUM

var longestPalindrome = function (s) {

  let max=1;
  let maxStart=0;

  for (let i=0; i<s.length; i++){
    for (let j=s.length-1;j>=i+max; j--){
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

  for (let i=0; i<Math.floor(s.length/2); i++){
    if (s[i] !== s[s.length-1-i]) return false;
  }
  
  return true;
}