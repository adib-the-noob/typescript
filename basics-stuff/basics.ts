// function addTwoToValue(num: number): number {


function userSignUp(email: string, password: string, isVerified: boolean = false) {
    return {
        message: "User signed up successfully",
    }
}

let signedUser = userSignUp('adib@adib.com', '123456');
console.log(signedUser);
