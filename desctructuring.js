var obj = {
    firstName: "Antonio",
    lastName: "Hernandez",
    age: 28
};
var fN = obj.firstName, lN = obj.lastName;
console.log(fN);
console.log(lN);
// let {firstName:firstName, lastName:lastName} = obj;
// console.log(firstName);
// console.log(lastName);
var firstName = obj.firstName, lastName = obj.lastName;
console.log(firstName);
console.log(lastName);
/**/
//Array
var arr = ['a', 'b'];
var x = arr[0], y = arr[1];
console.log(x); // a
console.log(y); // b
/**/
//Function
function f(_a) {
    var x = _a.x;
    console.log(x); // Refer to x directly
}
f({ x: 1 });
/**/
//Default parameters
function ff(_a) {
    var _b = _a.x, x = _b === void 0 ? 0 : _b;
    console.log(x);
}
ff({}); // 0
