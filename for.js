var array = [1, 2, 3];
//For
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}
//Foreach
array.forEach(function (value) {
    console.log(value);
});
//ForIn
var obj = { a: 1, b: 2 };
for (var prop in obj) {
    console.log(prop);
}
//ForOf
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var value = array_1[_i];
    console.log(value);
}
