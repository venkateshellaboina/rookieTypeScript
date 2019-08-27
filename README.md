# TypeScript

var message:string ='hello world';
console.log(message);

## Type Assertion. Kind of type casting in C++/JAVA

var str = '100';
var num:number = <number> <any> str;
console.log(num);

## functions with Rest parameters

function addsum(...nums:number[]){
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum+=nums[i];
    }
    console.log(sum);
}

addsum(1,2,3,4);

## function overloading

function disp(s1:string):void; 
function disp(n1:number,s1:string):void; 

function disp(x:any,y?:any):void { 
   console.log(x); 
   if(y!=undefined)
   console.log(y); 
} 
disp("abc");
disp(1,"xyz");

## Tuples
 
var myTuple = [10,'hello','world'];
console.log(myTuple[1]);

## Union Type 

var num2:number|string;
num2 = 1;
console.log(num2);
num2 = 'hello';
console.log(num2);
 //num2 = true; throws error because num2 is not of Boolean type

 

