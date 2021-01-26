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

  if (divisor === 1) return negative ? Math.max(-dividend,-2147483648) : Math.min(dividend,2147483648);

  function subtract(number, sub){
    if (number-sub < 0) return;
    if (number-sub >= 0) count = Math.min(++count,2147483648)
    subtract(number-sub,sub)
  }

  subtract(dividend,divisor);
  return negative ? -count : count;
}