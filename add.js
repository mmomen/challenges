/*
How would you make this work?
add(2, 5); // 7
add(2)(5); // 7
*/

var add = function(x,y) {
  return x + (y || 0);
};