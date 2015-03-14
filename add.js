/*
How would you make this work?
add(2, 5); // 7
add(2)(5); // 7
*/

var add = function(x,y) {
  if (!y) {
    return function(yy) {
      if (typeof yy !== 'undefined') {
        x += yy;
        return arguments.callee;
      } else {
        return x;
      }
    };
  }
  return x + y;
};