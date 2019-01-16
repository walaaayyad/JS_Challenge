/*
Challenge
Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer. 
Sample Test Cases
Input:4
Output:24

Input:8
Output:40320
*/
//---------------------------------------------

function factorialNumber(n) {
return (n<2)?1:factorialNumber(n-1)*n;
};

//--------------------------------------------------
// *********  Recurtion  ************
//--------------------------------------------------
/*
Recursion is a programming term that means a “self-calling” function. Such functions can be used to 
  solve certain tasks in elegant ways.

When a function calls itself, that’s called a recursion step. 
 The basis of recursion is function arguments that make the task so simple 
 that the function does not make further calls.
*/

/*=======================================
Source to read about Recurtion:
https://javascript.info/recursion
https://medium.freecodecamp.org/recursion-in-javascript-1608032c7a1f
[JavaScript Recursion - Exercises, Practice, Solution]=> https://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php
*/