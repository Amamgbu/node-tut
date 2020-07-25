const http = require('http');
const path = require('path');
const fs = require('fs');
const qs = require('querystring');

const server = http.createServer((req,res) => {
    if (req.method == "GET"){
    if (req.url == '/'){
        res.writeHead(200,{'Content-Type':'text.html'});
        res.end('Hello World. Welcome to WeJapa Internship.');
    }else{
        res.writeHead(404,{'Content-Type':'text.html'});
        res.end('URL not found');
    }
}
    else if (req.method == "POST"){
        if (req.url == '/'){
            var body = '';
            req.on('data',(data) => {
                body += data;
            })
            req.on('end',() => {
                var name = qs.parse(body)['name'];
                if (typeof(name) == "undefined"){
                    name = body;
                }
                res.writeHead(200,{'Content-Type':'text.html'});
                res.end(`Hello ${name}, Welcome to WeJapa Internships!`);
            });


        }
        else{
            res.writeHead(404,{'Content-Type':'text.html'});
            res.end('URL not found');
        }
    }

});

const PORT = process.env.PORT || 5000;

server.listen(PORT,() => console.log(`Sever running on port ${PORT}`));