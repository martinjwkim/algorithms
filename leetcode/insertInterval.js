/*
Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).
You may assume that the intervals were initially sorted according to their start times.
*/

const insert = (intervals, newInterval) => {
  let leftIntervals = [];
  let rightIntervals = [];
  let left = newInterval[0];
  let right = newInterval[1];

  for (let i = 0; i < intervals.length; i++) {

    if (intervals[i][0] <  newInterval[0] &&  intervals[i][1] <  newInterval[0]) {
      leftIntervals.push(intervals[i])
    } else if (intervals[i][0] >  newInterval[1] &&  intervals[i][1] >  newInterval[1]) {
      rightIntervals.push(intervals[i])
    } else {
      left = Math.min(intervals[i][0], left)
      right = Math.max(intervals[i][1], right)
    }
  }

  return [...leftIntervals, [left, right], ...rightIntervals]
}

console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]],[4,8]))