const wordBreak = (s, wordDict, memo={}) => {
  if (memo[s] !== undefined) return memo[s];
  if (s.length === 0) return true;
  
  for (let word of wordDict){
      let len = word.length;
      if (s.slice(0,len) === word){
          if(wordBreak(s.slice(len), wordDict, memo)) {
              memo[s] = true;
              return true;
          }
      }
  }

  memo[s] = false;
  
  return false;
};