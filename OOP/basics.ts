class User{
    
    protected _courseCount = 1;

    public email: string;
    public name: string;
    private readonly city: string = "Dhaka";

    constructor(name: string, email: string){
        this.name = name;
        this.email = email;
        this.city = "Dhaka";
    }

    get appleEmail(): string {
        return `apple${this.email}`;
    }

    get getCourseCount(): number {
        return this._courseCount;
    }

    set courseCount(newCourseNumber){
        if (newCourseNumber <= 1){
            throw new Error("Invalid course count");
        }
        this._courseCount = newCourseNumber;
    }
}

// const adib = new User("adib@adib.com", "Adib");
// console.log(adib);
// console.log("--------------------");
// console.log(adib.appleEmail);
// console.log(adib.getCourseCount);
// console.log(adib.courseCount);
// adib.courseCount = 2;
// console.log(adib.getCourseCount);
// console.log(adib.courseCount);

class SubUser extends User{
    isFamily: boolean = true;
    changeCourseCount(){
        this._courseCount = 4;
    }
}

const user2 = new SubUser();
user2.changeCourseCount();
console.log(user2.getCourseCount);