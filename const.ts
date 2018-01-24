//const foo; //'const' declarations must be initialized.
const foo = 1;
//foo = 2; //Cannot assign to 'foo' because it is a constant or a read-only property.


function func() {
      if (true) {
          const tmp = 123;
      }
      console.log(tmp); //Cannot find name 'tmp'.
  }
func();
