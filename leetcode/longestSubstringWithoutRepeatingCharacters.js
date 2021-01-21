// MEDIUM

var lengthOfLongestSubstring = function (s) {

  if (s.length<2) return s.length;

  let hash = {};
  let i = 0;
  let j = 0;
  let max =0;
  let curr = 0;

  while (j < s.length){
    if (!hash[s[j]]){
      hash[s[j]] = 1;
      curr++;
      j++;
      max = Math.max(max, curr);
    } else {
      hash[s[i]] -= 1;
      i++;
      curr--;
    }
  }

  return max;
};