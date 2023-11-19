const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
    const urlp = url.parse(req.url, true).pathname;
    if (urlp === '/about/me') {
        res.write('nikhil p from iritty');
        res.end();
    } else if (urlp === '/about/my/friend') {
        res.write('athul thomas');
        res.end();
    } else if (urlp === '/content/html') {
        fs.readFile('./index.html', (err, page) => {
            if (err) {
                res.write("something went wrong");
                res.end();
            } else if (page) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(page);
                res.end();
            }
        });
    } else if (urlp === '/html/+/css') {
        fs.readFile('./fullstack.html', (err, page) => {
            if (err) {
                res.write("something went wrong");
                res.end();
            } else if (page) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(page);
                res.end();
            }
        });
    } else if (urlp === '/calculater/html/js') {
        fs.readFile('./nik.html', (err, page) => {
            if (err) {
                res.write("something went wrong");
                res.end();
            } else if (page) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(page);
                res.end();
            }
        });
    } else if (urlp === '/simplegame/html/js') {
        fs.readFile('./simplegame.html', (err, page) => {
            if (err) {
                res.write("something went wrong");
                res.end();
            } else if (page) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(page);
                res.end();
            }
        });
    }
}).listen(3000);
