// The Secret Life of Objects
// this vs bind vs apply (call)
// this refers to object called


// PROTOTYPES
// A prototype is another object that is used as a fallback source of properties.
// Object.prototype { Functions = Function.prototype, Arrays = Array.prototype}

// Constructors
// Using new keyword in front causes it to be treated as a constructor

// enumerable vs nonenumerable properties
// standard properties in Object.prototype are all nonenumerable

// can create an object without a prototype; Object.create(null) e.g. for 'map' function

// use _ to indicate (to human readers) that this arg is not going to be used.

// Getters and setters
var pile = {
  elements: ["eggshell", "orange peel", "worm"],
  get height() {
    return this.elements.length;
  },
  set height(value) {
    console.log("Ignoring attempt to set height to", value);
  }
};
// defineProperty prototypes for function objects; use new keyword
function pile2(type) {
  this.type = type;
}
Object.defineProperty(pile2.prototype, "height", {
  get: function() { return this.type; }
});
var new_pile = new pile2("BIG");
console.log(new_pile.height);

// Exercises

// A vector type

function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function (other_vector) {
  return new Vector(this.x + other_vector.x, this.y + other_vector.y);
};

Vector.prototype.minus = function (other_vector) {
  return new Vector(this.x - other_vector.x, this.y - other_vector.y);
};

Object.defineProperty(Vector.prototype, "length", {
  get: function () { return Math.sqrt(this.x * this.x + this.y * this.y); }
});
// Testing
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5

// Sequence Interface
// next(); get the next element, which returns null when sequence at its end.
// 

function ArraySeq(array) {
  this.array = array;
  this.pos = -1;
}
ArraySeq.prototype.newSequence = function () {
  return (this.pos == this.array.length - 1) ? null : this.array.slice(this.pos++, this.array.length);
};
ArraySeq.prototype.current = function () {
  return this.array[this.pos];
};

function logFive(seq) {
  for (var i = 0; i < 5; i++) {
   if (!seq.newSequence()) {break;}
   console.log(seq.current()); 
  }
}

logFive(new ArraySeq([1, 2]));
// → 1
// → 2

function RangeSeq(from, to) {
  this.pos = from - 1;
  this.to = to;
}

RangeSeq.prototype.newSequence = function() {
  return (this.to == this.pos) ? null : this.pos++;
};
RangeSeq.prototype.current = function() {
  return this.pos;
};

logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104






