/**
* Given a roman numeral as input, write a function that converts the roman
* numeral to a number and outputs it.
*
* Ex:
* translateRomanNumeral("LX") // 60
*
* When a smaller numeral appears before a larger one, it becomes
* a subtractive operation. You can assume only one smaller numeral
* may appear in front of larger one.
*
* Ex:
* translateRomanNumeral("IV") // 4
*
* You should return `null` on invalid input.
*/

var DIGIT_VALUES = {
 I: 1,
 V: 5,
 X: 10,
 L: 50,
 C: 100,
 D: 500,
 M: 1000
};

var translateRomanNumeral = function(romanNumeral){
  var one = DIGIT_VALUES[romanNumeral.charAt(0)];
  var two = DIGIT_VALUES[romanNumeral.charAt(1)];
  if (one) {
    if (two) {
      if (one >= two) {
        return one + two;
      } else if (two > one) {
        return two - one;
      }
    }
    if (!(romanNumeral.charAt(1) in DIGIT_VALUES)) {
      return null;
    }
    return one;
  }
  return null;
};

console.log(translateRomanNumeral('XI'));