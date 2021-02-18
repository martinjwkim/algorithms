const numDecodings = (s, memo={}) => {

  if (memo[s] >= 0) return memo[s];
  if (!s.length) return 1;

  let total = 0;
  let num1 = +s.slice(0, 1);
  let num2 = +s.slice(0, 2);

  if (num2 == 10 || num2 === 20) {
    total += numDecodings(s.slice(2), memo)
  }
  else {
    if (num1 > 0 && num1 < 10) total += numDecodings(s.slice(1), memo);
    if (num2 > 10 && num2 < 27) total += numDecodings(s.slice(2), memo);
  }

  memo[s] = total;

  return memo[s];
};