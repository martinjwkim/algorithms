function collectOdds(arr, oddsArr=[]){

  if (!arr.length){
    return oddsArr
  }

  if (arr[0]%2===1){
    oddsArr.push(arr[0])
  }

  return collectOdds(arr.slice(1), oddsArr)

}

console.log(collectOdds([1,2,3,4,5,6,7]))