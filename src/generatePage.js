const Intern = require("../lib/Intern")
const Manager = require("../lib/Manager")

const generatePage = (team) => {
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
            ${team.filter(team => team instanceof Manager)
                .map(manager => `
                <div class="card shadow bg-light m-3 col-12 col-md-5 col-lg-3">
                    <div class="badge badge-primary">
                        <h2 class="card-title">${manager.name}</h2>
                        <h4>- Manager -</h4>
                    </div>
                    <div class="card-body list-group">
                        <p class="list-group-item">${manager.id}</p>
                        <p class="list-group-item">Email:
                            <a href="${manager.email}" class="alert-link">${manager.email}</a>
                        </p>
                        <p class="list-group-item">${manager.officeNumber}</p>
                    </div>
                </div>`
            )}

            ${team.filter(team => team instanceof Engineer)
                .map(engineer => `
                <div class="card shadow bg-light m-3 col-12 col-md-5 col-lg-3">
                    <div class="badge badge-primary">
                        <h2 class="card-title">${engineer.name}</h2>
                        <h4>- Engineer -</h4>
                    </div>
                    <div class="card-body list-group">
                        <p class="list-group-item">${engineer.id}</p>
                        <p class="list-group-item">Email:
                            <a href="${engineer.email}" class="alert-link">${engineer.email}</a>
                        </p>
                        <p class="list-group-item">Github:
                            <a href="https://github.com/${engineer.github}" class="alert-link">${engineer.github}</a>
                        </p>
                    </div>
                </div>`
            )}
    
            ${team.filter(team => team instanceof Intern)
                .map(intern => `
                <div class="card shadow bg-light m-3 col-12 col-md-5 col-lg-3">
                    <div class="badge badge-primary">
                        <h2 class="card-title">${intern.name}</h2>
                        <h4>- Intern -</h4>
                    </div>
                    <div class="card-body list-group">
                        <p class="list-group-item">${intern.id}</p>
                        <p class="list-group-item">Email:
                            <a href="${intern.email}" class="alert-link">${intern.email}</a>
                        </p>
                        <p class="list-group-item">School: ${intern.school}</p>
                    </div>
                </div>`
            )}
    
            </div>
        </section>
    </body>
    </html>`
};