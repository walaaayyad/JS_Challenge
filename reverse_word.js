//Function To Reverse Words .. for example 'Hi' will be 'iH'

//******  My Code  ******
function reverse( str ) {
    return (str<=1)? str: reverse(str.substring(1))+ str[0];
  };


 /*===================================================================
                             substring
======================================================================
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
 ----------------------------------------------------------------------------------------------
DescriptionSection
------------------
substr() extracts length characters from a string, counting from the start index.

If start is a positive number, the index starts counting at the start of the string. Its value is capped at str.length.
If start is a negative number, the index starts counting from the end of the string. Its value is capped at -str.length.
Note: In Microsoft JScript, negative values of the start argument are not considered to refer to the end of the string.

If length is omitted, substr() extracts characters to the end of the string.
If length is undefined, substr() extracts characters to the end of the string.
If length is a negative number, it is treated as 0.

For both start and length, NaN is treated as 0.

NOTE: it is considered a legacy function and should be avoided when possible..use the substring() method instead.

*/
//Ex:
var str = 'Mozilla';

console.log(str.substr(1, 2));
// expected output: "oz"
console.log(str.substr(2));
// expected output: "zilla"

//-----------------

console.log(aString.substr(0, 1));   // 'M'
console.log(aString.substr(1, 0));   // ''
console.log(aString.substr(-1, 1));  // 'a'
console.log(aString.substr(1, -1));  // ''
console.log(aString.substr(-3));     // 'lla'
console.log(aString.substr(1));      // 'ozilla'
console.log(aString.substr(-20, 2)); // 'Mo'
console.log(aString.substr(20, 2));  // ''
