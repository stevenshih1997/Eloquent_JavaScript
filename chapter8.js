// Bugs and Error Handling
// Strict mode disallows giving a function multiple parameters with the same name and removes
// certain problematic language features entirely,
// such as the with statement. putting 'use strict' rarely hurts.

'use strict';

// Example Vector test; this is repetitive. Testing frameworks are better.

function Vector(x, y) {
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function (other) {
  return new Vector(this.x + other.x, this.y + other.y);
};

function testVector() {
  var p1 = new Vector(10, 20);
  var p2 = new Vector(-10, 5);
  var p3 = p1.plus(p2);

  if (p1.x !== 10) return 'fail: x property';
  if (p1.y !== 20) return 'fail: y property';
  if (p2.x !== -10) return 'fail: negative x property';
  if (p3.x !== 0) return 'fail: x from plus';
  if (p3.y !== 25) return 'fail: y from plus';
  return 'everything ok';
}

console.log(testVector());
// → everything ok

// Error constructor to create our exception value. Instances of
// this constructor also gathers info about the call stack,
// a so-called stack trace.
function promptDirection(question) {
  var result = prompt(question, '');
  if (result.toLowerCase() == 'left') return 'L';
  if (result.toLowerCase() == 'right') return 'R';
  throw new Error('Invalid direction: ' + result);
}

function look() {
  if (promptDirection('Which way?') == 'L') {
    return 'a house';
  }
  return 'two angry bears';
}

try {
  console.log('You see', look());
} catch (error) {
  console.log('Something went wrong: ' + error);
}

// Clean-up code can be put in finally block

// Define a new type of error
function InputError(message) {
  this.message = message;
  this.stack = (new Error()).stack;
}
InputError.prototype = Object.create(Error.prototype);
InputError.prototype.name = "InputError";

// for (;;) {
//   try {
//     console.log('You chose ');
//     break;
//   } catch (e) {
//     if (e instanceof InputError) {
//       console.log('Not a valid direction. Try again');
//     } else {
//       throw e;
//     }
//   }
// }
// Exercises
// Retry

function MultiplicatorUnitFailure() {
  // this.stack = (new Error()).stack;
  this.message = 'Multiplication Error';
}
MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);
MultiplicatorUnitFailure.prototype.name = 'MultiplicatorUnitFailure';

function primitiveMultiply(a, b) {
  if (Math.random() < 0.1) {
    return a * b;
  }
  throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  for (;;) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (e instanceof MultiplicatorUnitFailure) {
        return primitiveMultiply(a, b);
      } else {
        throw e;
      }
    }
  }
}

console.log(reliableMultiply(8, 8));
// → 64




