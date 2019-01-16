/*https://www.coderbyte.com/editor/guest:Letter%20Capitalize:JavaScript
Challenge
Have the function LetterCapitalize(str) take the str parameter being passed and 
capitalize the first letter of each word. Words will be separated by only one space. 
Sample Test Cases
Input:"hello world"

Output:"Hello World"


Input:"i ran there"

Output:"I Ran There"
*/
//----------------------------------------------------------------------------------


function LetterCapitalize(str) { 

    str = str.toLowerCase()  //this step to avoid capital letters in the middle of the word
             .split(' ')  // split the sentence to separated words
             .map((s)=> s.charAt(0).toUpperCase()+s.substring(1)) // capitalize first letter
             .join(' '); // join the words to return sentence
    return str; 
           
  };

//----------------------------------------------------------------
// ************    charAt()   ************
//----------------------------------------------------------------
/*
# The String object's charAt() method returns a new string consisting of the single UTF-16 code unit 
located at the specified offset into the string.

# Syntax: character = str.charAt(index) [index
         An integer between 0 and 1-less-than the length of the string.
         If no index is provided, the default is 0]

# A string representing the character (exactly one UTF-16 code unit) at the specified index; 
    empty string if index is out of range.
*/
// Example:
  var anyString = 'Brave new world';
console.log("The character at index 0   is '" + anyString.charAt()   + "'"); //The character at index 0   is 'B'
console.log("The character at index 0   is '" + anyString.charAt(0)   + "'"); //The character at index 0   is 'B'
console.log("The character at index 4   is '" + anyString.charAt(4)   + "'"); //The character at index 4   is 'e'
console.log("The character at index 999 is '" + anyString.charAt(999) + "'"); //The character at index 999 is ''

//----------------------------------------------------------------
// ************    Unicode   ************
//----------------------------------------------------------------
/*
# Unicode is an universal character set that defines the list of characters from majority of the writing systems,
    and associates for every character an unique number (code point).

# Example: 'hello' message is a sequence of numbers 0x68 0x65 0x6C 0x6C 0x6F,
    where each letter uniquely corresponds to a number: h is 0x68, e is 0x65, etc.
*/

//----------------------------------------------------------------
// ************    BMP   ************
//----------------------------------------------------------------
/*
Basic Multilingual Plane or shortly BPM. It contains characters from most of the 
   modern languages (Basic Latin, Cyrillic, Greek, etc)
   and a big number of symbols.
*/






//===============================
/*
Used Source:
https://stackoverflow.com/questions/4878756/how-to-capitalize-first-letter-of-each-word-like-a-2-word-city
[read about Unicode]=> https://dmitripavlutin.com/what-every-javascript-developer-should-know-about-unicode/
                       https://medium.com/webisbeautiful/understanding-utf-in-javascript-539f77574eaa
[read about charAt()]=> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
[read about BMP]=> https://en.wikipedia.org/wiki/Plane_%28Unicode%29
*/