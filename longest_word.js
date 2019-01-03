/*
Challenge
-----------
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 
Sample Test Cases
Input:"fun&!! time"

Output:"time"


Input:"I love dogs"

Output:"love"
*/
//***** My Code To Solve It ******
function LongestWord2(sen) { 

 let result= sen
  .replace(/[^a-z A-Z]/g, ' ')
  .split(' ')
  .reduce((a,b)=> b.length > a.length ? b : a, '');
 return result;
         
};

/*===============================================================
                      reduce()
=================================================================
https://codeburst.io/learn-understand-javascripts-reduce-function-b2b0406efbdc
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
-----------------------------------------------------------------

DESCRIPTION
-----------
* The reduce() method executes a reducer function (that you provide) on each member of the array 
resulting in a single output value.

* reduce() executes the callback function once for each element present in the array, 
excluding holes in the array, receiving four arguments:

* The reducer function takes four arguments:

Accumulator (acc)
Current Value (cur)
Current Index (idx)  optional
Source Array (src)   optional
Your reducer function's returned value is assigned to the accumulator,
whose value is remembered across each iteration throughout the array and ultimately becomes the final, 
single resulting value.

* If the array is empty and no initialValue is provided, 
TypeError will be thrown. If the array has only one element (regardless of position) and no initialValue is provided, or if initialValue is provided but the array is empty, 
the solo value will be returned without calling callback.
*/

//EX:
var maxCallback = ( acc, cur ) => Math.max( acc.x, cur.x );
var maxCallback2 = ( max, cur ) => Math.max( max, cur );

// reduce() without initialValue
[ { x: 22 }, { x: 42 } ].reduce( maxCallback ); // 42
[ { x: 22 }            ].reduce( maxCallback ); // { x: 22 }
[                      ].reduce( maxCallback ); // TypeError

// map/reduce; better solution, also works for empty or larger arrays
[ { x: 22 }, { x: 42 } ].map( el => el.x )
                        .reduce( maxCallback2, -Infinity );
//----------------------------------------------------------

[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
  return accumulator + currentValue;
}); //  10

[0, 1, 2, 3, 4].reduce( (accumulator, currentValue, currentIndex, array) => accumulator + currentValue ); // 10
//----------------------------------------------------------

[0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue;
}, 10); // 20
//-----------------------------------------------------------

//*******  Sum all the values of an array  **********
var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
// sum is 6

var total = [ 0, 1, 2, 3 ].reduce(
  ( accumulator, currentValue ) => accumulator + currentValue,
  0
); 
//-----------------------------------------------------------

//**********  Sum of values in an object array  **********
var initialValue = 0;
var sum = [{x: 1}, {x:2}, {x:3}].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x;
},initialValue)

console.log(sum) // logs 6

var initialValue = 0;
var sum = [{x: 1}, {x:2}, {x:3}].reduce(
    (accumulator, currentValue) => accumulator + currentValue.x
    ,initialValue
);

console.log(sum) // logs 6
//--------------------------------------------------------------

//*******  Flatten an array of arrays  **********
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function(accumulator, currentValue) {
    return accumulator.concat(currentValue);
  },
  []
);
// flattened is [0, 1, 2, 3, 4, 5]

var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  ( accumulator, currentValue ) => accumulator.concat(currentValue),
  []
);
//---------------------------------------------------------------

//******  Counting instances of values in an object  *******
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
// countedNames is: { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
//---------------------------------------------------------------

//******  Grouping objects by a property  *******
var people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    var key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}
var groupedPeople = groupBy(people, 'age');
// groupedPeople is:
// { 
//   20: [
//     { name: 'Max', age: 20 }, 
//     { name: 'Jane', age: 20 }
//   ], 
//   21: [{ name: 'Alice', age: 21 }] 
// }
//-----------------------------------------------------

//****  Bonding arrays contained in an array of objects using the spread operator and initialValue  ****
// friends - an array of objects 
// where object field "books" - list of favorite books 
var friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}];

// allbooks - list which will contain all friends' books +  
// additional list contained in initialValue
var allbooks = friends.reduce(function(accumulator, currentValue) {
  return [...accumulator, ...currentValue.books];
}, ['Alphabet']);

// allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace', 
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]
//------------------------------------------------------

//*******  Remove duplicate items in array  *********
let arr = ['a', 'b', 'a', 'b', 'c', 'e', 'd', 'e', 'c', 'd', 'd', 'd', 'd'];
let result = arr.sort().reduce((accumulator, current) => {
    const length = accumulator.length
    if (length === 0 || accumulator[length - 1] !== current) {
        accumulator.push(current);
    }
    return accumulator;
}, []);
console.log(result); //['a','b','c','d','e']
//------------------------------------------------------

//*******  Running Promises in Sequence  **********
/**
 * Runs promises from array of functions that can return promises
 * in chained manner
 *
 * @param {array} arr - promise arr
 * @return {Object} promise object
 */
function runPromiseInSequence(arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
    Promise.resolve(input)
  );
}

// promise function 1
function p1(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 5);
  });
}

// promise function 2
function p2(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 2);
  });
}

// function 3  - will be wrapped in a resolved promise by .then()
function f3(a) {
 return a * 3;
}

// promise function 4
function p4(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 4);
  });
}

const promiseArr = [p1, p2, f3, p4];
runPromiseInSequence(promiseArr, 10)
  .then(console.log);   // 1200
//------------------------------------------------------

//******* Function composition enabling piping ******
// Building-blocks to use for composition
const double = x => x + x;
const triple = x => 3 * x;
const quadruple = x => 4 * x;

// Function composition enabling pipe functionality
const pipe = (...functions) => input => functions.reduce(
    (acc, fn) => fn(acc),
    input
);

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// Usage
multiply6(6); // 36
multiply9(9); // 81
multiply16(16); // 256
multiply24(10); // 240
//---------------------------------------------------------

//***********   write map using reduce  **************
if (!Array.prototype.mapUsingReduce) {
  Array.prototype.mapUsingReduce = function(callback, thisArg) {
    return this.reduce(function(mappedArray, currentValue, index, array) {
      mappedArray[index] = callback.call(thisArg, currentValue, index, array);
      return mappedArray;
    }, []);
  };
}

[1, 2, , 3].mapUsingReduce(
  (currentValue, index, array) => currentValue + index + array.length
); // [5, 7, , 10]
//----------------------------------------------------------





