function addUpTo(n) {
  let sum = 0;
  for (let i=1;i<=n;i++){
    sum+=i
  }
  return sum;
}

function addUpTo2(n) {
  return n*(n+1)/2
}

console.log(addUpTo(6))
console.log(addUpTo2(6))

// which is better? speed/memory or readability?
// can check speed using performance.now() which returns in milliseconds
