# JS_Challenge

-This Repo to collect JavaScript codes

## It includes :
1. My Code to solve some challenges
2. The sites used
3. Discreption Section 

# My Answers to some js-code-challenge
1- Function to return **the second largest number in the array** from [hackerrank](https://www.hackerrank.com/)
```
function getSecondLargest(nums) {
    let desNums;
    let removeDuplicate;
    
    removeDuplicate =  nums.filter((a,b) =>   nums.indexOf(a)===b);
    desNums = removeDuplicate.sort((a,b)=> b-a);
    
    return desNums[1];
}
```
2- Function to return **the factorial number.** from [hackerrank](https://www.hackerrank.com/)
```
function factorial(n) {
    return (n<2)? 1 : factorial(n-1)*n;
}
```
3- Function to **print each vowel in a STRING on a new line then each consonant.** from [hackerrank](https://www.hackerrank.com/)
```
function vowelsAndConsonants(s) {
    let constants=[];
    let vowels=['a','e','o','u','i']
    s.split('').forEach(i => {
        vowels.includes(i) ? 
        console.log(i):
        constants.push(i);
    });
    constants.forEach(x => console.log(x));
}
```
4- Function to **reverse string** using the split,reverse,and join methods. from [hackerrank](https://www.hackerrank.com/)
```
function reverseString(s) {
    try{
        let str= s.split("").reverse().join("");
        console.log(str);
    }
    catch(e){
        console.log(e.message);
        console.log(s);
    }
};
```
5- Function has two parameters must return **an Object modeling a rectangle**. from [hackerrank](https://www.hackerrank.com/)
```
function Rectangle(a, b) {
   this.length = a;
   this.width = b;
   this.perimeter = 2*(a+b);
   this.area= a*b;
}
```
6- Join the elements in 'array1' with the elements in 'array2' respectively. **My Question**
  - A- put the result in a new array.
  - B- Print the value of it
```
[].concat.apply([],array1.map((i,index)=> [i + array2[index]]));
```
```
array1.forEach((i,index)=> console.log(i+ array2[index]));
```
7- Function has array of objects as input, every object has two properties x & y.
  **Count the times which x.value == y.value** 
```
function(objects) {
const count= objects.filter(i => i.x == i.y).length;
return count;
}
```
