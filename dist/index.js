"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: 'jung',
    age: 35,
    gender: 'male',
};
const sayHi = (person) => {
    return `Hello ${person.name}. You are ${person.age} years old ${person.gender}`;
};
console.log(sayHi(person));
//# sourceMappingURL=index.js.map