// Code goes here
'use strict';
//New map
let map = new Map();
//Adding values
map.set("A", 1);
map.set("B", 2);
map.set("C", 3);
//Adding values chaining
map.set("d", 4).set("e", 5).set("f", 6);
//Adding values in initialization
let map1 = new Map([
    ["A", 1],
    ["B", 2],
    ["C", 3],
]);
//Extract values
console.log(map.get("A")); //1
//Check existence
console.log(map.has("A")); //true
console.log(map.has("AA")); //false
//Delete entries
map.delete("A");
console.log(map.has("A")); //false
//Size of map
console.log(map.size); //5, Note, size is property not method
//Clear map
map.clear();
console.log(map.size); //0
//Loop
let map2 = new Map([
    ["APPLE", 1],
    ["ORANGE", 2],
    ["MANGO", 3]
]);
//Using keys
console.log(map2.keys());
for (let key of map2.keys()) {
    console.log(key);
}
//APPLE
//ORANGE
//MANGO
//using values
console.log(map2.values());
for (let value of map2.values()) {
    console.log(value);
}
//1
//2
//3
//Using entries
console.log(map2.entries());
for (let entry of map2.entries()) {
    console.log(entry[0], entry[1]);
}
//APPLE 1
//ORANGE 2
//MANGO 3
//Destructuring
for (let [key, value] of map2.entries()) {
    console.log(key, value);
}
