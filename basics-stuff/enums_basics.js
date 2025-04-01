var OperatingSystems;
(function (OperatingSystems) {
    OperatingSystems["MACOS"] = "macOS";
    OperatingSystems["WINDOWS"] = "Windows";
    OperatingSystems["LINUX"] = "Linux";
})(OperatingSystems || (OperatingSystems = {}));
var selectedOS = OperatingSystems.MACOS;
console.log("Selected OS: ".concat(selectedOS)); // Output: Selected OS: 0
