function same(arr1,arr2){
  let squaredObj = count(arr2);
  for (let element of arr1){
    if (squaredObj[Math.pow(element,2)]){
      --squaredObj[Math.pow(element,2)]
    } else {
      return false
    }
  }
  for (let element in squaredObj){
    if (squaredObj[element] !== 0){
      return false
    }
  }

  return true
}

function count(arr){
  // takes and array and counts frequency of each element
  let obj = {};
  for (let element of arr){
    obj[element] = ++obj[element] || 1;
  }
  return obj;
}

console.log(same([1,2,3],[4,1,9]))
console.log(same([1,2,3],[1,9]))
console.log(same([1,2,3],[4,4,9]))