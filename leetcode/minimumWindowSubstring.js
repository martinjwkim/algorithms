const minWindow = (s,t) => {
  let start = 0;
  let end = 0;
  let res = s;

  let tCount = new Array(26).fill(0);
  let tSet = new Set();

  for (let char of t) {
    tCount[char.charCodeAt(0)-65]+=1
    tSet.add(char);
  }

  while (start < s.length){
    if (!tSet.has(s[start])){
      start++;
    }
    if (!tSet.has(s[end])){
      end++;
      if (tSet.has(s[end])){
        tCount[s[end].charCodeAt(0)-65]-=1
      }
    }
    if (Math.max(...tCount) === 0) {
      let str = s.slice(start,end+1);
      if (str.length < res.length) res = str;
      tCount[s[start].charCodeAt(0)-65]+=1;
      start++;
    }
    if (Math.max(...tCount)>0){
      end++;
      if (tSet.has(s[end])){
        tCount[s[end].charCodeAt(0)-65]-=1
      }
    }
  }

  return res;
  
}

console.log(minWindow("ADOBECODEBANC",'ABC'))

// s = "ADOBECODEBANC", t = "ABC"