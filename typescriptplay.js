var message = 'hello world';
console.log(message);
/*
    Type Assertion. Kind of type casting in C++/JAVA
*/
var str = '100';
var num = str;
console.log(num);
/*
    functions with Rest parameters
*/
function addsum() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    console.log(sum);
}
addsum(1, 2, 3, 4);
function disp(x, y) {
    console.log(x);
    if (y != undefined)
        console.log(y);
}
disp("abc");
disp(1, "xyz");
/*
    Tuples
*/
var myTuple = [10, 'hello', 'world'];
console.log(myTuple[1]);
/*
    Union Type
*/
var num2;
num2 = 1;
console.log(num2);
num2 = 'hello';
console.log(num2);
var customer = {
    firstName: "Quentin",
    lastName: "Tarantino",
    sayHi: function () { return "Hi there"; }
};
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
/*
    class and objects
*/
var Animal = /** @class */ (function () {
    function Animal(name, color) {
        this.name = name;
        this.color = color;
    }
    return Animal;
}());
;
var obj = new Animal('Dog', 'White');
console.log('Animal name is : ' + obj.name + '  , Animal color is : ' + obj.color);
