// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee"); 

class Manager extends Employee {
    constructor(school,name,id,email){
        super(name,id,email);
        this.school = school; 
    }
    getSchool(){
        return `School: ${this.school}`; 
    }
    getRole(){
        return "Intern"; 
    }

}; 
module.exports = Intern; 
