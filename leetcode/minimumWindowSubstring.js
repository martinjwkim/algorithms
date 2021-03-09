const minWindow = (s,t) => {
  let start = 0;
  let end = 0;
  let res = "";

  let tCount = new Array(100).fill(0);
  let tSet = new Set();

  for (let char of t) {
    tCount[char.charCodeAt(0)-65]+=1
    tSet.add(char);
  }

  while (end <= s.length){
    let max = Math.max(...tCount)
    if (!tSet.has(s[start])){
      start++;
      if (end < start) end = start;
    } else if (max > 0) {
      if (tSet.has(s[end])){
        tCount[s[end].charCodeAt(0)-65]-=1
      }
      end++;
    } else if (max === 0){
      let str = s.slice(start, end);
      if (res === "" || str.length < res.length){
        res = str;
      }
      tCount[s[start].charCodeAt(0)-65]+=1;
      start++;
    }
  }

  return res;
}