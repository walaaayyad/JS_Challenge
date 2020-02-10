# JS_Challenge

-This Repo to collect JavaScript codes

## It includes :
1. My Code to solve some challenges
2. The sites used
3. Discreption Section 

# My Answers to some js-code-challenge
1- Function to return **the second largest number in the array.**
```
function getSecondLargest(nums) {
    let desNums;
    let removeDuplicate;
    
    removeDuplicate =  nums.filter((a,b) =>   nums.indexOf(a)===b);
    desNums = removeDuplicate.sort((a,b)=> b-a);
    
    return desNums[1];
}
```
2- Function to return **the factorial number.**
```
function factorial(n) {
    return (n<2)? 1 : factorial(n-1)*n;
}
```
