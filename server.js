const http = require('http');

const { authenticateUser } = require('./authenticate');


const requestHandler = async function (req, res) {
    res.setHeader("Content-Type", "application/json");

    authenticateUser(req, res)
    .then(() => {
        if (req.url === '/' && req.method === 'GET') {
            res.writeHead(200);
            res.end("Welcome");
    
        } else if (req.url === '/books' && req.method === 'GET') {
            res.writeHead(200);
            res.end("Getting all the books");
     
        } else if (req.url === '/books' && req.method === 'POST') {
            res.writeHead(200);
            res.end("creating a new book");
        } else if (req.url === '/books' && req.method === 'PUT') {
            res.writeHead(200);
            res.end("Editing the entire field(s) an existing book");
        } else if (req.url === '/books' && req.method === 'PATCH') {
            res.writeHead(200);
            res.end("Editing a/some field(s) of an existing book");
        } else if (req.url === '/books' && req.method === 'DELETE') {
            res.writeHead(200);
            res.end("Deleting an existing book")

        } else if (req.url === '/books/authors' && req.method === 'GET') {
            res.writeHead(200);
            res.end("Getting all the authors for the books");
        } else if (req.url === '/books/authors' && req.method === 'POST') {
            res.writeHead(200);
            res.end("Creating a new author");
        } else if (req.url === '/books/authors' && req.method === 'PATCH') {
            res.writeHead(200);
            res.end("Editing a/some field(s) of an existing author");
        } else if (req.url === '/books/authors' && req.method === 'PUT') {
            res.writeHead(200);
            res.end("Editing the entire field(s) of an existing author");
        }  else if (req.url === '/books/authors' && req.method === 'DELETE') {
            res.writeHead(200);
            res.end("Deleting an existing book")
        }
})
    .catch((err) => {
        res.statusCode = 401;
        res.end(JSON.stringify({
            error: err
        }));

})
}
   

const server = http.createServer(requestHandler)

server.listen(3000, () => {
    console.log("server is running")
})