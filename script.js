//complete this code
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set age(newAge) {
    this._age = newAge;
  }
}
class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}
class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}
const person = new Person("John", 25);
console.log(person.name); // Output: John

person.age = 30;
console.log(person._age); // Output: 30 (Note: Accessing _age directly, as no getter for age was provided)

const student = new Student("Alice", 22);
student.study(); // Output: Alice is studying

const teacher = new Teacher("Bob", 40);
teacher.teach(); // Output: Bob is teaching