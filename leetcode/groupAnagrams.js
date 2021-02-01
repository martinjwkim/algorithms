/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.
*/

const groupAnagrams = (strs) => {
  let res = [];
  let anagrams = {};
  let matchFound;
  let count;
  
  function isSameObject(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
    for (let key in obj1) {
      if (obj1[key] !== obj2[key]) return false
    }
    return true;
  }

  for (let str of strs) {
    count = {};
    matchFound = false;
    for (let char of str) {
      count[char] = count[char] + 1 || 1;
    }
    for (let i in anagrams) {
      if (isSameObject(anagrams[i], count)) {
        res[+i].push(str)
        matchFound = true;
      }
    }
    if (!matchFound) {
      anagrams[res.length] = count;
      res.push([str]);
    }
  }

  return res;

}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))