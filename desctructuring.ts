let obj = {
  firstName: "Antonio",
  lastName: "Hernandez",
  age: 28
};

let {firstName:fN, lastName: lN} = obj;
console.log(fN);
console.log(lN);

// let {firstName:firstName, lastName:lastName} = obj;
// console.log(firstName);
// console.log(lastName);

let {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);


/**/
//Array

const arr = ['a', 'b'];
const [x, y] = arr;
console.log(x); // a
console.log(y); // b


/**/
//Function
function f({x}) {
    console.log(x); // Refer to x directly
}
f({x:1});

/**/
//Default parameters
function ff({x=0}) {
    console.log(x);
}
ff({}); // 0
