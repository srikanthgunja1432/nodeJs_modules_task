const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/html') {
        res.setHeader('Content-Type', 'text/html');
        res.write("<h1>Simple HTML</h1>");
    } else if (req.url === '/json') {
        res.setHeader('Content-Type', 'application/json');
        const data = {
            "name": "srikanth",
            "age": 20
        };
        res.write(JSON.stringify(data));
    } else {
        res.setHeader('Content-Type', 'text/plain');
        res.write("Simple Text");
    }
    res.end();
});

server.listen(3000, () => console.log('Server listening on port 3000'));
