var maxArea = function(height) {

  let max = 0;
  let curr;

  for (let i=0; i< height.length; i++){
    for (let j=0; j<height.length; j++){
      curr = Math.min(height[i],height[j])* Math.abs(i-j);
      max = Math.max(curr, max);
    }
  }

  return max;
};