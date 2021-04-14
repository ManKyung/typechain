"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const lynn = new Human('Jung', 22, 'male');
const sayHi = (person) => {
    return `Hello ${person.name}. You are ${person.age} years old ${person.gender}`;
};
console.log(sayHi(lynn));
//# sourceMappingURL=index.js.map