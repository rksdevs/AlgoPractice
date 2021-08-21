/* 
Implement a function called countUniqueValue, which accepts a sorted array, and counts the unique value in the array. There can be negative value in the array, but it will always be sorted.

examples:

input - [1,1,1,2,2,]
output - 2

input - [1,1,2,2,2,2,4,5,5,6,7,7,7,14]
output - 7

input - [-2, -1, 0, 1, 1]
output - 4

use Multiple pointers pattern
*/

function countUniqueValue(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let pnt1 = 0;
  let pnt2 = 1;
  let uniqueCount = 1;

  while (pnt2 < arr.length) {
    pnt1 = pnt2 - 1;
    if (arr[pnt1] !== arr[pnt2]) {
      uniqueCount++;
      pnt2++;
    } else {
      pnt2++;
    }
  }
  return uniqueCount;
}

console.log(countUniqueValue([1, 1, 1, 2, 2]));
