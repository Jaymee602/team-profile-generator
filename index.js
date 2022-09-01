const fs = require('fs');
const inquirer = require('inquirer');

const generatePage = require('./src/generatePage');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


let manager = [];
let engineers = [];
let interns = [];

const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the team manager's name:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's name!");
                    return false;
                }
            } 
        },
        {
            type:"input",
            name: "id",
            message: "Enter the team manager's ID number:",
            validate: idInput => {
            if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's ID number!");
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the team manager's email:",
            validate: function (email) {

                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    
                if (valid) {
                    return true;
                } else {
                    console.log("Please enter a valid email!")
                    return false;
                }
            }
        },
        {
            type:"input",
            name: "officeNumber",
            message: "Enter the team manager's office number:",
            validate: officeInput => {
            if (officeInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's office number!");
                    return false;
                }
            } 
        },
    ])
    .then(managerAnswers => {
        const  { name, id, email, officeNumber } = managerAnswers;
        const newManager = new Manager (name, id, email, officeNumber);
        manager.push(newManager);
        console.log(manager)
    })
};


const engineerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the engineer's name:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's name!");
                    return false;
                }
            } 
        },
        {
            type:"input",
            name: "id",
            message: "Enter the engineer's ID number:",
            validate: idInput => {
            if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's ID number!");
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the engineer's email:",
            validate: function (email) {

                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    
                if (valid) {
                    return true;
                } else {
                    console.log("Please enter a valid email!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the engineer's Github:",
            validate: githubInput => {
                if (githubInput) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's Github!");
                        return false;
                    }
                } 
        }
    ])
    .then(engineerAnswers => {
        const { name, id, email, github } = engineerAnswers;
        const newEngineer = new Engineer (name, id, email, github);
        engineers.push(newEngineer);
        console.log(newEngineer);
        console.log(engineers)
        addTeamMember();
    });
};


const internQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the intern's name:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's name!");
                    return false;
                }
            } 
        },
        {
            type:"input",
            name: "id",
            message: "Enter the intern's ID number:",
            validate: idInput => {
            if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's ID number!");
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the intern's email:",
            validate: function (email) {

                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    
                if (valid) {
                    return true;
                } else {
                    console.log("Please enter a valid email!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern's school:",
            validate: schoolInput => {
                if (schoolInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's school!");
                        return false;
                    }
                } 
        }
    ])
    .then(internAnswers => {
        const { name, id, email, school } = internAnswers;
        const newIntern = new Intern (name, id, email, school);
        interns.push(newIntern);
        console.log(newIntern)
        console.log(interns)
        addTeamMember();
    });
};


const addTeamMember = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'addMember',
            message: 'What kind of team member would you like to add?',
            choices:[
                'Engineer',
                'Intern',
                'I am done adding team members'
            ]
        }
    ])
    .then(answer => {
        if(answer.addMember === 'Engineer'){
            return engineerQuestions();
        } else if(answer.addMember === 'Intern'){
            return internQuestions();
        } else if (answer.addMember === 'I am done adding team members'){
            return generatePage(manager, engineers, interns);
        }

    });
};

const writeFile = (data) => {
    fs.writeFileSync('./dist/index.html', data, err => {
       if (err) {
           console.log(err);
           return;
       } else {
           console.log("What a great team you've got! View your team profile in dist/index.html.")
       }
   })
};  
    
function init() {
    managerQuestions()
        .then(addTeamMember)
        .then(data => {
            return writeFile(data);
        })
        .catch(err => {
            console.log(err);
        });
}

init();
