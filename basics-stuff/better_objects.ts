const User = {
    name: "John Doe",
    age: 30,
    isVerified: true,
}

function createUser({
    name: string,
    isVerified: boolean,
}){}

// createUser();

function objectRetun(): {name: string, age: number} {
    return {
        name: "adib",
        age: 20,
    }
}

const user = objectRetun();
console.log(user.name);
console.log(user.age);
