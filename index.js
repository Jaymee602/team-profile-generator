const fs = require('fs');
const inquirer = require('inquirer');

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
        console.log(newManager)
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
            return;
        }

    });
};

const generatePage = (engineers, interns) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        <title>My Team</title>
    </head>
    <body>
        <header class="bg-success text-white text-center p-5">
            <h1>My Team</h1>
        </header>
        <section class="container p-5">
            <div class="row justify-content-between">
                <div class="card shadow bg-light m-3 col-12 col-md-5 col-lg-3">
                    <div class="badge badge-primary">
                        <h2 class="card-title">${Manager.name}</h2>
                        <h4>- Manager -</h4>
                    </div>
                    <div class="card-body list-group">
                        <p class="list-group-item">${Manager.id}</p>
                        <p class="list-group-item">Email:
                            <a href="${Manager.email}" class="alert-link">${Manager.email}</a>
                        </p>
                        <p class="list-group-item">${Manager.officeNumber}</p>
                    </div>
                </div>

            ${engineers.forEach(Engineer =>`
                <div class="card shadow bg-light m-3 col-12 col-md-5 col-lg-3">
                    <div class="badge badge-primary">
                        <h2 class="card-title">${Engineer.name}</h2>
                        <h4>- Engineer -</h4>
                    </div>
                    <div class="card-body list-group">
                        <p class="list-group-item">${Engineer.id}</p>
                        <p class="list-group-item">Email:
                            <a href="${Engineer.email}" class="alert-link">${Engineer.email}</a>
                        </p>
                        <p class="list-group-item">Github:
                            <a href="https://github.com/${Engineer.github}" class="alert-link">${Engineer.github}</a>
                        </p>
                    </div>
                </div>`
            )}
    
            ${interns.forEach(Intern =>`
                <div class="card shadow bg-light m-3 col-12 col-md-5 col-lg-3">
                    <div class="badge badge-primary">
                        <h2 class="card-title">${Intern.name}</h2>
                        <h4>- Intern -</h4>
                    </div>
                    <div class="card-body list-group">
                        <p class="list-group-item">${Intern.id}</p>
                        <p class="list-group-item">Email:
                            <a href="${Intern.email}" class="alert-link">${Intern.email}</a>
                        </p>
                        <p class="list-group-item">School: ${Intern.school}</p>
                    </div>
                </div>`
            )}
    
            </div>
        </section>
    </body>
    </html>`
};

const writeFile = (data) => {
    fs.writeFile('./dist/index.html', data, err => {
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
            .then(() => {
                return generatePage();
            })
        .then(data => {
            writeFile(data);
        })
        .catch(err => {
            console.log(err);
        });
}

init();
