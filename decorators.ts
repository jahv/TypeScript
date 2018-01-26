@course
class Person {
  firsName;
  lastName;

  constructor(firsName, lastName) {
    this.firsName = firsName;
    this.lastName = lastName;
  }
}

function course(target) {
  Object.defineProperty(target.prototype, 'course', {value: () => "Angular 2"});
}

let person = new Person("Ja", "Hv");
person.course();
