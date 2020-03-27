// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee"); 

class Engineer extends Employee {
    constructor(gitHub,name,id,email) {
        super(name,id,email);
        this.gitHub = gitHub; 
    }
    getGitHub(){
        return `${this.gitHub}`; 
        // create axios call to get gitHub information
    };
    getRole(){
        return "Engineer"; 
    };

}; 
module.exports = Engineer; 