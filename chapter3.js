/* eslint-disable no-console */
function min(a, b) {
  return Math.min(a, b);
}

console.log(min(0, 10));
console.log(min(0, -10));

function isEven(number) {
  if (number === 0) {
    return true;
  } else if (number === 1) {
    return false;
  }
  return isEven(number - 2);
}

console.log(isEven(50));
console.log(isEven(75));
