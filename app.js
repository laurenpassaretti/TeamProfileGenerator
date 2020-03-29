const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```

//globals
let employees = []
let currentEmployee

//First prompt
function promptUserGeneral() {

    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your Employee ID Number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
        {
            type: "list",
            name: "employeeType",
            message: "Please select your role from the list below: ",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        },
     

    ]).then(answers => {

        console.log(answers);
        currentEmployee = answers

        if (answers.employeeType === "Manager") {
            // promptUserManager();
            async function promptUserAdd() {
                try {
                    const answers = await promptUserManager();
            
                    return inquirer.prompt([
                        {
                            type: "input",
                            name: "addEmployee",
                            message: "Would you like to add another employee?",
                            choices: [
                                "Yes",
                                "No"
                            ],
                        }]).then(answers => {
                            console.log(answers)
                            currentEmployee = answers
                            if (answers.addEmployee === "yes") {
                                promptUserGeneral()
                            } else {
                                // fs.writeFile(`./output/teamProfile.html`, render(answers), function () {
                                //     console.log("Successfully wrote file");
                                // })
            
                            }
            
                        })
            
                } catch (err) {
                    console.log(err);
                };
            }
            promptUserAdd()


        } else if (answers.employeeType === "Engineer") {

            async function promptUserAdd() {
                try {
                    const answers = await promptUserEngineer();
            
                    return inquirer.prompt([
                        {
                            type: "input",
                            name: "addEmployee",
                            message: "Would you like to add another employee?",
                            choices: [
                                "Yes",
                                "No"
                            ],
                        }]).then(answers => {
                            console.log(answers)
                            currentEmployee = answers
                            if (answers.addEmployee === "yes") {
                                promptUserGeneral()
                            } else {
                                // fs.writeFile(`./output/teamProfile.html`, render(answers), function () {
                                //     console.log("Successfully wrote file");
                                // })
            
                            }
            
                        })
            
                } catch (err) {
                    console.log(err);
                };
            }

        } else if (answers.employeeType === "Intern") {

            async function promptUserAdd() {
                try {
                    const answers = await promptUserIntern();
            
                    return inquirer.prompt([
                        {
                            type: "input",
                            name: "addEmployee",
                            message: "Would you like to add another employee?",
                            choices: [
                                "Yes",
                                "No"
                            ],
                        }]).then(answers => {
                            console.log(answers)
                            currentEmployee = answers
                            if (answers.addEmployee === "yes") {
                                promptUserGeneral()
                            } else {
                                // fs.writeFile(`./output/teamProfile.html`, render(answers), function () {
                                //     console.log("Successfully wrote file");
                                // })
            
                            }
            
                        })
            
                } catch (err) {
                    console.log(err);
                };
            }

        }



    })
};
//Option 1
function promptUserManager() {
    return inquirer.prompt([
        {
            type: "input",
            name: "officeNumber",
            message: "What is your Office Number?"
        },

    ]).then(answers => {
        //render Manager
        let managerVar = new Manager(answers.officeNumber, currentEmployee.name, currentEmployee.id, currentEmployee.email)
        fs.appendFileSync(`./output/teamProfile.html`, render([managerVar]), function () {
            console.log("Successfully created manager profile")
        })
        console.log(managerVar);
    });
}
//Option 2
function promptUserEngineer() {
    return inquirer.prompt([
        {
            type: "input",
            name: "GitHub",
            message: "What is your GitHub username?"
        },
    ]).then(answers => {
        // render(Engineer)
        var engineerVar = new Engineer(answers.GitHub, currentEmployee.name, currentEmployee.id, currentEmployee.email)
        fs.appendFile(`./output/teamProfile.html`, render([engineerVar])), function () {
            console.log("Successfully created engineer profile")
        }
        console.log(answers);
    });
}
//Option 3
function promptUserIntern() {
    return inquirer.prompt([
        {
            type: "input",
            name: "school",
            message: "What School do you attend?"
        },
    ]).then(answers => {
        //render Intern
        var internVar = new Intern(answers.school, currentEmployee.name, currentEmployee.id, currentEmployee.email)
        fs.appendFile(`./output/teamProfile.html`, render([internVar]), function () {
            console.log("Successfully created intern profile")
        })

        console.log(answers);
    })
};
promptUserGeneral(); 
// async function promptUserAdd() {
//     try {
//         const answers = await promptUserGeneral();

//         return inquirer.prompt([
//             {
//                 type: "input",
//                 name: "addEmployee",
//                 message: "Would you like to add another employee?",
//                 choices: [
//                     "Yes",
//                     "No"
//                 ],
//             }]).then(answers => {
//                 console.log(answers)
//                 currentEmployee = answers
//                 if (answers.addEmployee === "yes") {
//                     promptUserGeneral()
//                 } else {
//                     fs.writeFile(`./output/teamProfile.html`, render(answers), function () {
//                         console.log("Successfully wrote file");
//                     })

//                 }

//             })

//     } catch (err) {
//         console.log(err);
//     };
// }
// promptUserAdd(); 
// function promptUserAdd(){
// return inquirer.prompt([
//     {
//         type: "input",
//         name: "addEmployee",
//         message: "Would you like to add another employee?",
//         choices: [
//             "Yes",
//             "No"
//         ],
//     }]).then(answers => {
//         console.log(answers)
//         currentEmployee = answers
//         if (answers.addEmployee === "yes") {
//             promptUserGeneral()
//         } else {
//             fs.writeFile(`./output/teamProfile.html`, render(answers), function () {
//                 console.log("Successfully wrote file");
//             })

            //             }

            //         })

            //     } 

            
           

// async function promptUserAdd() {
//     console.log("hi");
//     try {
//         const answers = await promptUserGeneral();
//         return inquirer.prompt([
//             {
//                 type: "input",
//                 name: "addEmployee",
//                 message: "Would you like to add another employee?",
//                 choices: [
//                     "Yes",
//                     "No"
//                 ],
//             }
//         ])
//     }
// };

// async function promptUserAdd() {
//     try {
//         const answers = await promptUserGeneral();
//         return inquirer.prompt([
//             {
//                 type: "input",
//                 name: "addEmployee",
//                 message: "Would you like to add another employee?",
//                 choices: [
//                     "Yes",
//                     "No"
//                 ],
//             }])

//         console.log(answers)
//         currentEmployee = answers
//         if (answers.addEmployee === "yes") {
//             promptUserGeneral()
//         } else {
//             fs.writeFile(`./output/teamProfile.html`, render(answers), function () {
//                 console.log("Successfully wrote file");
//             })

//         }

//     }}}
