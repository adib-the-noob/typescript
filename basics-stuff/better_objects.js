var User = {
    name: "John Doe",
    age: 30,
    isVerified: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isVerified;
}
// createUser();
function objectRetun() {
    return {
        name: "adib",
        age: 20,
    };
}
var user = objectRetun();
console.log(user.name);
console.log(user.age);
