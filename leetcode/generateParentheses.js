let generateParenthesis = function(n){
  let res = [];

  function generateCombo(leftCounter,rightCounter,currentString){
    if (leftCounter > rightCounter) return;
    if (!leftCounter && !rightCounter) res.push(currentString);
    if (leftCounter > 0) generateCombo(leftCounter-1,rightCounter, currentString+'(')
    if (rightCounter > 0) generateCombo(leftCounter,rightCounter-1, currentString+')')
  }

  generateCombo(n,n,'')

  return res;
}



