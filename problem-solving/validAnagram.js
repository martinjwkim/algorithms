function validAnagram(str1,str2){
  // split string into arrays
  let arr1 = str1.split('')
  let arr2 = str2.split('')
  // frequency count for elements in arrays
  let obj1 = count(arr1)
  let obj2 = count(arr2)
  // check if objects match
  for (let key in obj1){
    if (!(obj1[key]===obj2[key])){
      return false
    }
  }
  for (let key in obj2){
    if (!(obj2[key]===obj1[key])){
      return false
    }
  }

  return true
}

function count(arr){
  let obj = {};
  for (let element of arr){
    obj[element] = ++obj[element] || 1;
  }
  return obj;
}

console.log(validAnagram('',''))
console.log(validAnagram('aaz','zza'))
console.log(validAnagram('anagram','nagaram'))
console.log(validAnagram('awesome','awesom'))