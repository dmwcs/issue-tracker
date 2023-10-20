type a = { name: string; age?: number };

type b = keyof a;

const c: b = { name: 'shelton', age: 13 };

console.log(c);
