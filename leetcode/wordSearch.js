const exist = (board, word) => {
    
  function findWord(x,y,i){
      if (word[i] !== board[y][x]) return false;
      if (i === word.length-1) return true;
      
      board[y][x] = '#'
      
      for (let [a, b] of [[x+1,y],[x-1,y],[x,y+1],[x,y-1]]){
          if (a<board[0].length && a>=0 && b<board.length && b>=0) {
              if (findWord(a,b,i+1)) return true;
          }
      }
      
      board[y][x] = word[i];
      
      return false;
  }
  
  for (let i=0; i<board.length; i++){
      for (let j=0; j<board[i].length; j++){
          if (findWord(j,i,0)) return true;
      }
  }
  
  return false;
}