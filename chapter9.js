// Regular Expressions

'use strict';

// Testing for matches
console.log(/abc/.test('abcde'));
// true

console.log(/[0123456789]/.test('in 1992'));
// true

// To invert a set of characters—that is, to express that you want to match any character
// except the ones in the set—you can write a caret (^) character after the opening bracket.

var notBinary = /[^01]/;
console.log(notBinary.test('1100100010100110'));
// → false

// plus sign indicates that the element may be repeated more than once.

console.log(/'\d+'/.test("'123'"));
// true

// Question mark means optional

var neighbor = /neighbou?r/;
console.log(neighbor.test('neighbour'));
// true
console.log(neighbor.test('neighbor'));
// true

// To indicate a pattern should occur a precise number of times,
// use curly braces. eg. {4} means occurs exactly 4 times.



var dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test('30-1-2003 8:45'));
// → true

var cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo"));
// → true

// match() tells us where in the string there's a match
console.log('one two 100'.match(/\d+/));
// ['100']


// /abc/ A sequence of characters
// /[abc]/ Any character from a set of characters
// /[^abc]/  Any character not in a set of characters
// /[0-9]/ Any character in a range of characters
// /x+/  One or more occurrences of the pattern x
// /x+?/ One or more occurrences, nongreedy
// /x*/  Zero or more occurrences
// /x?/  Zero or one occurrence
// /x{2,4}/  Between two and four occurrences
// /(abc)/ A group
// /a|b|c/ Any one of several patterns
// /\d/  Any digit character
// /\w/  An alphanumeric character (“word character”)
// /\s/  Any whitespace character
// /./ Any character except newlines
// /\b/  A word boundary
// /^/ Start of input
// /$/ End of input
