/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
and return an array of the non-overlapping intervals that cover all the intervals in the input.
*/

const merge = (intervals) => {

  let sortedIntervals = intervals.sort((a,b)=>a[0]-b[0]);
  let left = sortedIntervals[0][0];
  let right = sortedIntervals[0][1];
  let res = [];

  for  (let i=1; i<sortedIntervals.length; i++){
    if (sortedIntervals[i][0] <= right) {
      right = Math.max(right, sortedIntervals[i][1])
    } else if (sortedIntervals[i][0]> right) {
      res.push([left, right]);
      left = sortedIntervals[i][0];
      right =  sortedIntervals[i][1];
    }
  }

  res.push([left, right])

  return res;
}

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))