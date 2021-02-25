const characterReplacement = (s, k) => {
  if (s.length < 2) return s.length;

  let start = 0,
    end = 0,
    res = 1,
    max, len;

  let counts = new Array(26).fill(0);
  counts[s[0].charCodeAt(0)-65]+=1

  while (end < s.length) {
    max = Math.max(...counts);
    len = end - start + 1;

    console.log(start, end, len, max)

    if (len - max <= k){
      res = Math.max(res, len);
      end++;
      if (end<s.length) counts[s[end].charCodeAt(0)-65]+=1;
    } else {
      counts[s[start].charCodeAt(0)-65]-=1
      start++;
    }
  }

  return res;
}