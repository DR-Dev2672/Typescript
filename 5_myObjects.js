"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Dev",
    email: "dev@gmail.com",
    isPaid: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
    //some code
}
createUser({ name: "dev", isPaid: true });
// createUser({name:"dev",isPaid:true,email:"d.com"}) is not allowed
//to solve this problem
var newUser = { name: "dev", isPaid: true, email: "d.com" };
createUser(newUser);
//this does not provide error
// function createCourse(){}{}
// a weird syntax
function createCourse() {
    return { name: "node", price: 255 };
}
