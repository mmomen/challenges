/*
How would you make this work?
add(2, 5); // 7
add(2)(5); // 7
*/

var add = function(x,y) {
  if (!y) {
    return function(yy) {
      return x + yy;
    };
  }
  return x + y;
};