const Manager = require("../lib/Manager")

const generatePage = (manager, engineers, interns) => {
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
            ${manager.forEach(Manager =>`
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
                </div>`
            )}

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



module.exports = generatePage; 