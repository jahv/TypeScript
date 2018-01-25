setTimeout(function () {
    console.log("setTimeout called");
}, 1000);
setTimeout(function () {
    console.log("setTimeout called");
}, 1000);
/***/
//Parameters
var add = function (a, b) {
    return a + b;
};
console.log(add(1, 2));
var addNew = function (a, b) { return a + b; };
console.log(addNew(1, 2));
