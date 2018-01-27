let a: number = 1;

//a = "1"; //Type '"1"' is not assignable to type 'number'.

let notSure: any = 1;
notSure = "Hello";

function returnNothing(): void {
  console.log("Nothing");
  return;
}
