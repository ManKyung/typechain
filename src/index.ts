interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: 'jung',
  age: 35,
  gender: 'male',
};

const sayHi = (person: Human): string => {
  return `Hello ${person.name}. You are ${person.age} years old ${person.gender}`;
};

console.log(sayHi(person));

export {};
