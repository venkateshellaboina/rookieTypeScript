var message:string ='hello world';
console.log(message);

/*
    Type Assertion. Kind of type casting in C++/JAVA
*/

var str = '100';
var num:number = <number> <any> str;
console.log(num);

/*
    functions with Rest parameters
*/
function addsum(...nums:number[]){
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum+=nums[i];
    }
    console.log(sum);
}

addsum(1,2,3,4);

/*
    function overloading
*/
function disp(s1:string):void; 
function disp(n1:number,s1:string):void; 

function disp(x:any,y?:any):void { 
   console.log(x); 
   if(y!=undefined)
   console.log(y); 
} 
disp("abc");
disp(1,"xyz");

/* 
    Tuples
*/

var myTuple = [10,'hello','world'];
console.log(myTuple[1]);

/* 
    Union Type 
*/

var num2:number|string;
num2 = 1;
console.log(num2);
num2 = 'hello';
console.log(num2);
 //num2 = true; throws error because num2 is not of Boolean type

 /*
    interfaces
 */

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

/*
    class and objects
*/

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

/*
    Access Specifiers : public,private,protected
*/
class Animall{
    name:string;
    private color : string;
    constructor(name:string,color:string){
        this.name = name;
        this.color = color;
    }
};

var objj = new Animall('Dog','White');
//console.log('Animal name is : '+obj.name+'  , Animal color is : '+objj.color); //Error because field color is private

/*
    Changes to objects
*/

var person = {
    firstName:"Tom", 
    lastName:"Hanks", 
    sayHello:function() {  }  //Type template 
 } 
 person.sayHello = function() {  
    console.log("hello "+person.firstName)
 }  
 person.sayHello();

/*
    Passing objects as parameters
*/
interface IPoint { 
    x:number 
    y:number 
 } 
 function addPoints(p1:IPoint,p2:IPoint):IPoint { 
    var x = p1.x + p2.x 
    var y = p1.y + p2.y 
    return {x:x,y:y} 
 } 
 
 var newPoint = addPoints({x:3,y:4},{x:5,y:1})
 console.log(newPoint);
