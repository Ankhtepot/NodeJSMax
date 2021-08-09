const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body>');
        res.write('<h1>Hello OMG!</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="createUser"><button type="submit">CreateUser</button></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write('<ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];

        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=') [1]);
        });

        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

    // res.write('<html>');
    // res.write('<head><title>Not found</title></head>');
    // res.write('<h1>Page not found</h1>')
    // res.write('</html>')
    // return res.end();
});

server.listen(3000);