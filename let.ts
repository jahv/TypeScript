//Global scope with var
function helloVar() {
  var a = "function";
  for (var i = 0; i < 5; i++) {
    var a = "block";
  }
  console.log(a);
}
helloVar();

//Block scope with let
function helloLet() {
  var a = "function";
  for (var i = 0; i < 5; i++) {
    let a = "block";
  }
  console.log(a);
}
helloLet();

/**********************/

//For with var
var funcs = [];
for (var i = 0; i < 5; i += 1) {
  var y = i;
  funcs.push(function(){
    console.log(y);
  })
}
funcs.forEach(function(func){
  func()
});

//For with let
var funcs = [];
for (var i = 0; i < 5; i += 1) {
  let y = i;
  funcs.push(function(){
    console.log(y);
  })
}
funcs.forEach(function(func){
  func()
});

//For with let
var funcs = [];
for (let i = 0; i < 5; i += 1) {
  funcs.push(function(){
    console.log(i);
  })
}
funcs.forEach(function(func){
  func()
});
