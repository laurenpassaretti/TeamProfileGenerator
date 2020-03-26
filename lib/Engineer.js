// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee"); 

class Manager extends Employee {
    constructor(gitHub,name,id,email){
        super(name,id,email);
        this.gitHub = gitHub; 
    }
    getGitHub(){
        return `${this.gitHub}`; 
    };
    getRole(){
        return "Engineer"; 
    };

}; 
module.exports = Engineer; 