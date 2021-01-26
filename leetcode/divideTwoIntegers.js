const divide = (dividend, divisor) => {
  
  let count = 0;
  let negative = false;
  
  if (divisor < 0) {
    negative = !negative;
    divisor = -divisor;
  }
  
  if (dividend < 0) {
    negative = !negative;
    dividend = -dividend;
  }

  if (divisor === 1) return negative ? inRange(-dividend) : inRange(dividend);

  function subtract(number, sub){
    if (number-sub < 0) return;
    if (number-sub >= 0) count++
    subtract(number-sub,sub)
  }

  function inRange(num){
    if (num>=2147483647) return 2147483647
    if (num<=-2147483648) return -2147483648

    return num
  }

  try {
    subtract(dividend,divisor);
  } catch (err) {
    return negative ? inRange(Math.floor(-dividend/divisor)) : inRange(Math.floor(dividend/divisor));
  }
  
  return negative ? inRange(-count) : inRange(count);
}