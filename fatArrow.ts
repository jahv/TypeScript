setTimeout(function(){
  console.log("setTimeout called");
}, 1000);

setTimeout(() => {
  console.log("setTimeout called");
}, 1000);

/***/
//Parameters
let add = function(a,b) {
  return a + b;
};
console.log(add(1, 2));

let addNew = (a, b) => a + b;
console.log(addNew(1, 2));
