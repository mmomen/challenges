/*

Smallest Substring of All Characters 

Question:

Given an array with unique characters arr and a string str, find the smallest substring of str containing all characters of arr.

Example:
arr: [x,y,z], str: xyyzyzyx
result: zyx

Implement your solution and analyze the runtime complexity

*/


var a = ['x', 'y', 'z'];
var b = 'xyyzyzyx';
var findSmallestString = function(arr, str) {
  for (var iStr = 0; iStr < str.length; iStr++) {
    for (var iArr = 0; iArr < arr.length; iArr++) {
      if (str[iStr] === arr[iArr]) {
        console.log(str[iStr], arr[iArr], 'y');
        break;
      }
    }
  }
};
findSmallestString(a, b);