const sayHi = (name: string, age: number, gender?: string): string => {
  return `Hello ${name}. You are ${age} years old ${gender}`;
};

console.log(sayHi('Jung', 34, 'male'));

export {};
