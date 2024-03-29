# TypeScript : The Superset of Javascript
1. Static Typed
2. File extension : .ts 
3. .ts file is compiled to create .js file
4. Execution format ts : tsc <fileName.ts>
5. After .js file is created use command : node <fileName.js> 
6. Semi-colon at the end is optional in TypeScript
7. Refer typescriptplay.ts and typescriptplay.js above.

```
main.ts : 
var message:string ='hello world';
console.log(message);

C:\nodejs-play\nodejs-play-1> tsc main.ts
C:\nodejs-play\nodejs-play-1> node main.js
```
## Type Assertion. Kind of type casting in C++/JAVA
```
var str = '100';
var num:number = <number> <any> str;
console.log(num);
```
## functions with Rest parameters
```
function addsum(...nums:number[]){
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum+=nums[i];
    }
    console.log(sum);
}

addsum(1,2,3,4);
```
## function overloading
```
function disp(s1:string):void; 
function disp(n1:number,s1:string):void; 
// '?' refers that argument is optional
function disp(x:any,y?:any):void { 
   console.log(x); 
   if(y!=undefined)
   console.log(y); 
} 
disp("abc");
disp(1,"xyz");
```
## Tuples
Kind of an array but can contain values of different types
 ```
var myTuple = [10,'hello','world'];
console.log(myTuple[1]);
```
## Union Type 
Declaring a variable with multiple data types
```
var num2:number|string;
num2 = 1;
console.log(num2);
num2 = 'hello';
console.log(num2);
 //num2 = true; throws error because num2 is not of Boolean type
```
 ## interface 
 ```
 interface IPerson { 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string 
 } 
 
 var customer:IPerson = { 
    firstName:"Quentin",
    lastName:"Tarantino", 
    sayHi: ():string =>{return "Hi there"} 
 } 
 
 console.log(customer.firstName) 
 console.log(customer.lastName) 
 console.log(customer.sayHi())  
 ```

 ## class and objects
```
 class Animal{
    name:string;
    color : string;
    constructor(name:string,color:string){
        this.name = name;
        this.color = color;
    }
};

var obj = new Animal('Dog','White');
console.log('Animal name is : '+obj.name+'  , Animal color is : '+obj.color);
```

## Access Specifiers
Similar to C++/JAVA 
```
class Animall{
    name:string;
    private color : string;
    constructor(name:string,color:string){
        this.name = name;
        this.color = color;
    }
};

var objj = new Animall('Dog','White');
console.log('Animal name is : '+obj.name+'  , Animal color is : '+objj.color); //Error because field color is private
```

## Changes to objects
```
var person = {
   firstName:"Tom", 
   lastName:"Hanks", 
   sayHello:function() {  }  //Type template 
} 
person.sayHello = function() {  
   console.log("hello "+person.firstName)
}  
person.sayHello();
```

## Passing objects as parameters
```
interface IPoint { 
    x:number 
    y:number 
 } 
 function addPoints(p1:IPoint,p2:IPoint):IPoint { 
    var x = p1.x + p2.x 
    var y = p1.y + p2.y 
    return {x:x,y:y} 
 } 
 
 var newPoint = addPoints({x:3,y:4},{x:5,y:1});
 console.log(newPoint);
```

