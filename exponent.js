// Create the exponent method. It should take 2 inputs: a and b. It should return a to the power of b (ab). For example exp(2, 3) should return 8 (which is 2*2*2).

function exp(a, b) {
  var x = a;
  while (b>1) {
    x *= a;
    b--;
    console.log(x,b);
  }
  return x;
}