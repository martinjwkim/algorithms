function capitalizeFirst (arr, capsArr=[]) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) return capsArr
  let splitArr = arr[0].split('')
  splitArr[0]=splitArr[0].toUpperCase()
  capsArr.push(splitArr.join(''))
  return capitalizeFirst(arr.slice(1), capsArr)
}

console.log(capitalizeFirst(['car','taco','banana']))
 // ['Car','Taco','Banana']
