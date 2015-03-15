// var getElementsByClassName = function(className) {
//   return document.getElementsByClassName(className);
// };
// Create the above functionality without using built-in methods to find classes.

var getElementsByClassName = function(cl) {
  var x = [];
  var nodes = document['body'].children;
  for (var i = 0; i < nodes.length; i++) {
    var list = nodes[i].classList;
    for (var ii = 0; ii < list.length; ii++) {
      if (list[ii] === cl) {
        x.push(nodes[i]);
      }
    }
  }
  // recursion?
  return x;
};