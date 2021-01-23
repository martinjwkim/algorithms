var letterCombinations = function (digits) {

  let hash = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }

  let charArr = [];

  if (!digits) return charArr;
  
  let digitsArr = digits.toString().split("");

  for (let element of digitsArr) {
    charArr.push(hash[element])
  }

  return mergeCombine(charArr);
}

function mergeCombine(arr) {
  if (arr.length === 1) return arr[0];

  let midPoint = Math.floor(arr.length / 2)
  let leftArr = arr.slice(0, midPoint)
  let rightArr = arr.slice(midPoint)

  return findCombinations(mergeCombine(leftArr), mergeCombine(rightArr))
}

function findCombinations(l1, l2) {
  let res = [];

  for (let i = 0; i < l1.length; i++) {
    for (let j = 0; j < l2.length; j++) {
      res.push(`${l1[i]}${l2[j]}`)
    }
  }

  return res;
}

console.log(letterCombinations(23));