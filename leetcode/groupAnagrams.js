/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.
*/

const groupAnagrams = (strs) => {
  let res = [];
  let anagrams = {};
  let matchFound;
  let anagram;
  
  function isSameObject(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
    for (let key in obj1) {
      if (obj1[key] !== obj2[key]) return false
    }
    return true;
  }

  for (let str of strs) {
    anagram = {};
    matchFound = false;
    for (let char of str) {
      anagram[char] = anagram[char] + 1 || 1;
    }
    for (let i in anagrams[str.length]) {
      if (isSameObject(anagrams[str.length][i], anagram)) {
        res[+i].push(str)
        matchFound = true;
      }
    }
    if (!matchFound) {
      anagrams[str.length] ?  anagrams[str.length][res.length] = anagram : anagrams[str.length]  = {[res.length]: anagram}
      res.push([str]);
    }
  }

  return res;

}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))