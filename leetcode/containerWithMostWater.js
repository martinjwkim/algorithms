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

var maxArea = function(height) {
  let l = 0;
  let r = height.length-1;
  let max = 0;
  let area;

  while (l<r){
    area = Math.min(height[l],height[r])*Math.abs(l-r)
    max = Math.max(area, max)

    height[l]<height[r] ? l++ : r--;
  }

  return max;
}