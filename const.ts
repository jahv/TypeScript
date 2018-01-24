//const foo; //'const' declarations must be initialized.
const fooX = 1;
//foo = 2; //Cannot assign to 'foo' because it is a constant or a read-only property.


function func() {
      if (true) {
          const tmp = 123;
      }
      console.log(tmp); //Cannot find name 'tmp'.
  }
func();


/***/
//Immutable
let foo = "foo";
foo = "moo";
console.log(foo);

const foo1 = 'abc';
foo1 = 'def'; // Cannot assign to 'foo1' because it is a constant or a read-only property.

//Immutable on objects
const fooObj = {};
fooObj = {}; //Cannot assign to 'fooObj' because it is a constant or a read-only property.

const fooObj1 = {};
fooObj1['prop'] = "Moo"; // Works
console.log(fooObj1);// { prop: 'Moo' }


/**/
//Avoid immutable on objects
const fooObj2 = Object.freeze({});
fooObj2['prop'] = "Moo"; // Works but...
console.log(fooObj2);//{}
