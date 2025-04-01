let score: string | number | boolean;

type User = {
    name: string;
    age: number;
}

type Admin = {
    name: string;
    age: number;
}

let hitesh: User | Admin = {
    name: 'Hitesh',
    age: 30,
}

console.log(hitesh);
console.log(typeof hitesh);

