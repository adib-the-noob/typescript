var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, email) {
        this._courseCount = 1;
        this.city = "Dhaka";
        this.name = name;
        this.email = email;
        this.city = "Dhaka";
    }
    Object.defineProperty(User.prototype, "appleEmail", {
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getCourseCount", {
        get: function () {
            return this._courseCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "courseCount", {
        set: function (newCourseNumber) {
            if (newCourseNumber <= 1) {
                throw new Error("Invalid course count");
            }
            this._courseCount = newCourseNumber;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
// const adib = new User("adib@adib.com", "Adib");
// console.log(adib);
// console.log("--------------------");
// console.log(adib.appleEmail);
// console.log(adib.getCourseCount);
// console.log(adib.courseCount);
// adib.courseCount = 2;
// console.log(adib.getCourseCount);
// console.log(adib.courseCount);
var SubUser = /** @class */ (function (_super) {
    __extends(SubUser, _super);
    function SubUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFamily = true;
        return _this;
    }
    SubUser.prototype.changeCourseCount = function () {
        this._courseCount = 4;
    };
    return SubUser;
}(User));
var user2 = new SubUser();
user2.changeCourseCount();
console.log(user2.getCourseCount);
