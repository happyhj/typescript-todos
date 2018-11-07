export default class Person {
  age: number;
  name: string;

  constructor({ age, name }) {
    this.age = age;
    this.name = name;
  }

  sayHello(): void {
    window.alert(`hello ${this.name}`);
  }
}
