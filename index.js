const fs = require('fs');
const inquirer = require('inquirer');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const team = [];


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
        const { name, id, email, officeNumber } = managerAnswers;
        const manager = new Manager (name, id, email, officeNumber);
        team.push(manager);
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
        const engineer = new Engineer (name, id, email, github);
        team.push(engineer);
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
        const intern = new Intern (name, id, email, school);
        team.push(intern);
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
    .then(addMember => {
        if(addMember === 'Engineer'){
            engineerQuestions();
        } else if(addMember === 'Intern'){
            internQuestions();
        } else if (addMember === 'I am done adding team members'){
            generatePage(team);
            return;
        }

    });
};

managerQuestions();
addTeamMember();