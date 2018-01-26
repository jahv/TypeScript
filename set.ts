let set = new Set();

set.add('APPLE');
set.add('ORANGE');
set.add('MANGO');

let set1 = new Set()
            .add('APPLE')
            .add('ORANGE')
            .add('MANGO');

let set3 = new Set(['APPLE', 'ORANGE', 'MANGO']);

console.log(set.has('APPLE')); //true


set.delete('APPLE')
console.log(set.has('APPLE'));//false

console.log(set.size);//2

set.clear();
console.log(set.size);//0

let set4 = new Set();
set4.add('Moo');
console.log(set4.size);//1
set4.add('Moo');
console.log(set4.size);//1

//Looping
for(let entry of set1) {
  console.log(entry);
}
