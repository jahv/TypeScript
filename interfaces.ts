interface Human {
  firstName: string;
  lastName: string;
}

interface Human2 {
  age: number;
  tellAge?: Function;
}

class Person implements Human, Human2 {
  firstName: string;
  lastName: string;
  age: number;
}

class Kid {
  toys: string;
}

class Student extends Person, Kid {

}
