const wordBreak = (s, wordDict) => {
  if (s.length === 0) return true;

  
  for (let word of wordDict){
      let len = word.length;
      if (s.slice(0,len) === word){
          if(wordBreak(s.slice(len), wordDict)) {
              return true;
          }
      }
  }
  
  return false;
};