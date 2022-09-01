const generatePage = (manager, engineers, interns) => {
    
    console.log(interns, engineers, manager)
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
            ${manager.map(({ name, id, email, officeNumber }) =>`
                <div class="card shadow bg-light m-3 col-12 col-md-5 col-lg-3">
                    <div class="badge badge-primary">
                        <h2 class="card-title">${name}</h2>
                        <h4>- Manager -</h4>
                    </div>
                    <div class="card-body list-group">
                        <p class="list-group-item">${id}</p>
                        <p class="list-group-item">Email:
                            <a href="${email}" class="alert-link">${email}</a>
                        </p>
                        <p class="list-group-item">${officeNumber}</p>
                    </div>
                </div>`
            )}

            ${engineers.map(({ name, id, email, github }) =>`
                <div class="card shadow bg-light m-3 col-12 col-md-5 col-lg-3">
                    <div class="badge badge-primary">
                        <h2 class="card-title">${name}</h2>
                        <h4>- Engineer -</h4>
                    </div>
                    <div class="card-body list-group">
                        <p class="list-group-item">${id}</p>
                        <p class="list-group-item">Email:
                            <a href="${email}" class="alert-link">${email}</a>
                        </p>
                        <p class="list-group-item">Github:
                            <a href="https://github.com/${github}" class="alert-link">${github}</a>
                        </p>
                    </div>
                </div>`
            )}
    
            ${interns.map(({ name, id, email, school }) =>`
                <div class="card shadow bg-light m-3 col-12 col-md-5 col-lg-3">
                    <div class="badge badge-primary">
                        <h2 class="card-title">${name}</h2>
                        <h4>- Intern -</h4>
                    </div>
                    <div class="card-body list-group">
                        <p class="list-group-item">${id}</p>
                        <p class="list-group-item">Email:
                            <a href="${email}" class="alert-link">${email}</a>
                        </p>
                        <p class="list-group-item">School: ${school}</p>
                    </div>
                </div>`
            )}
    
            </div>
        </section>
    </body>
    </html>`
    
};



module.exports = generatePage; 