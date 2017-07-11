//console.log([1,2,3,2,1].indexOf(2));
//console.log([1,2,3,2,1].lastIndexOf(2));

function range(start,end,step) {
	var array = [];
	if (step === undefined) {
		step = 1;
	}
	
	for (var i = start; i <= end; i+=step) {
		array.push(i);
	}
}

function reverseArray(array) {
	var newArray = [];
	for (var i = array.length-1; i>=0; i--) {
		
		newArray.push(array[i]);
	}
	return newArray;
}


//Look at this one!!
function reverseArrayInPlace(array) {
	var left;
	var right;
	var temp;
	for (var i = 0; i < array.length/2; i++) {
	  temp = array[i];
	  array[i] = array[array.length - 1 - i];	
	  array[array.length - 1 - i] = temp;
	}
}

function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
}

function deepEqual(a, b) {
	if (a == b) return true;
  if (a == null || typeof a != "object" || b == null || typeof b != "object")
  	return false;
  var propsInA = 0, propsInB = 0;

  for (var propA in a)
    propsInA += 1;

  for (var aProp in b) {
    propsInB += 1;
    if (!(aProp in a) || !deepEqual(a[aProp], b[aProp]))
      return false;
  }

  return propsInA == propsInB;

}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

//console.log(range(1, 10));
//console.log(reverseArrayInPlace(["A", "B", "C"]));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
//console.log(sum(range(1, 10)));
// → 55
