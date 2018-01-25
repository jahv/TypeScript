let array = [1, 2, 3];

//For
for(let i=0; i<array.length; i++) {
  console.log(array[i]);
}

//Foreach
array.forEach(function(value){
  console.log(value);
});

//ForIn
let obj = {a: 1, b: 2};
for(let prop in obj) {
  console.log(prop);
}

//ForOf
for(let value of array) {
  console.log(value);
}
