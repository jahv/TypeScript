"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = "";
        this.lastName = "";
        this.firstName = firstName;
        this.lastName = lastName;
    }
    name() {
        return `${this.firstName} ${this.lastName}`;
    }
    whoAreYou() {
        return `Hi i'm ${this.name()}`;
    }
}
let asim = new Person("Asim", "Hussain");
console.log(asim.whoAreYou());
let jahv = new Person("ja", "hv");
console.log(jahv.whoAreYou());
class Student extends Person {
    constructor(firstName, lastName, course) {
        super(firstName, lastName);
        this.course = course;
    }
    whoAreYou() {
        return `${super.whoAreYou()} and i'm studying ${this.course}`;
    }
    test() {
        console.log(this.firstName);
    }
}
let studentA = new Student("A", "AA", "Maths");
console.log(studentA.whoAreYou());
studentA.test();
/**/
class TestConstructor {
    constructor(foo, boo) {
        this.foo = foo;
        this.boo = boo;
    }
    getFoo() {
        return this.foo;
    }
}
let testConstructor = new TestConstructor("foo", "boo");
console.log(testConstructor.getFoo());
