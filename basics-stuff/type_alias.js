function createUser(user) {
    console.log(user);
}
;
var new_user = createUser({
    _id: "12345",
    name: "John Doe",
    age: 30,
    isVerified: true,
});
var newUser = {
    name: "John Doe",
    age: 30,
    isVerified: true,
    _id: "12345",
    credtitCardDetails: 1234567890,
};
console.log(newUser);
