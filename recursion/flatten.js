function flatten(arr, newarr=[]){
  for (let element of arr) {
    if (Array.isArray(element)){
      flatten(element, newarr)
    } else {
      newarr.push(element)
    }
  }
  return newarr
}

console.log(flatten([1,2,3,[4,5]]))