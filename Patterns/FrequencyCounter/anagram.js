/*check if two strings are anagrams of each other - implement frequency counter pattern
example 1:
str1 - "aaha!"
str2 - "aaah!"
output - true
example 2:
str1 - "maaza"
str2 - "mazza"
output - false
example 3:
str1 - ""
str2 - ""
output true
*/

function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let elem of str1) {
    frequencyCounter1[elem] = (frequencyCounter1[elem] || 0) + 1;
  }
  console.log(frequencyCounter1);
  for (let elem of str2) {
    frequencyCounter2[elem] = (frequencyCounter2[elem] || 0) + 1;
  }
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(checkAnagram("maaza!", "mazza!"));
