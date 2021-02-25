const characterReplacement = (s, k) => {
  const findLongest = (idx, char, rem, count) => {
    if (idx === s.length) return count+rem<s.length ? count+rem : s.length;
    if (s[idx] !== char) rem--;
    if (rem < 0) return count;

    return findLongest(idx+1, char, rem, count+1)
  }

  let curr;
  let max = 0;

  for (let i=0; i<s.length; i++){
    if (s[i] !== curr) {
      max = Math.max(findLongest(i+1, s[i], k, 1), max);
      curr = s[i]; 
    }
  }

  return max;
}

console.log(characterReplacement('ABAB', 2))