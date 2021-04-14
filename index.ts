const name = 'nicoloas',
  age = 24,
  gender = 'maie';

const sayHi = (name, age, gender?) => {
  console.log(`Hello ${name}. You are ${age} years old ${gender}`);
};

sayHi(name, age, gender);

export {};
