function userSignUp(email, password, isVerified) {
    if (isVerified === void 0) { isVerified = false; }
    return {
        message: "User signed up successfully",
    };
}
var signedUser = userSignUp('adib@adib.com', '123456');
console.log(signedUser);
