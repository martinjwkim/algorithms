const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  let hash = {};

  for (let char of s){
    hash[char] = hash[char] + 1 || 1;
  }

  for (let char of t) {
    if (!hash[char]) return false;
    hash[char] = hash[char] - 1;
  }

  return true;
}