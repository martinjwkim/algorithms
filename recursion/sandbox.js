function test(num=5,num2){
  console.log(num, num2)
}

test(undefined,1)
test(2,1)

function factorial(num){
  if (num === 1) return 1;
  return num * factorial(num-1)
}