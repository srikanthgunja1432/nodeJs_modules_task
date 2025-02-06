const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/About') {

        res.write("<h1>Simple About page</h1>");
    } else if (req.url === '/Contact') {
        res.write("<h1>Simple contact page</h1>");
    } else {
        res.write("Simple Home Page");
    }
    res.end();
});

server.listen(4000, () => console.log('Server listening on port 4000'));
