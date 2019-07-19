function Person(lastName, firstName){
    this.fName = firstName;
    this.lName = lastName;
}
Person.prototype.getFullName = function() {
    return `${this.fName} ${this.lName}`;
};

let p1 = new Person('DiLernia','Michael');
console.log(p1.getFullName());