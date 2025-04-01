type User = {
    readonly _id: string
    name: string
    age: number
    isVerified: boolean
    credtitCardDetails?: number
}

function createUser(user: User){
    console.log(user);
};

const new_user = createUser({
    _id: "12345",
    name: "John Doe",
    age: 30,
    isVerified: true,
})

let newUser: User = {
    name: "John Doe",
    age: 30,
    isVerified: true,
    _id: "12345",
    credtitCardDetails: 1234567890,
}
console.log(newUser);


