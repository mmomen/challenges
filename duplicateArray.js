/*
Make this work:
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
*/

var duplicate = function(x) { return x.concat(x); };

duplicate([1,2,3,4,5]);