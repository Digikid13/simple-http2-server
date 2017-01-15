import fs from 'fs';
import http from 'http';
import http2 from 'http2';

const PORT = {
    http: 8000,
    http2: 8001,
};
const options = {
    cert: fs.readFileSync('./cert.pem'),
    key: fs.readFileSync('./key.pem'),
};

const router = (type, req, res) => {
    res.end(`You are connected to: ${type}\nYou hit: ${req.url}`);
};

http2.createServer(options, router.bind(null, 'http2'))
     .listen(PORT.http2);

http.createServer(router.bind(null, 'http'))
    .listen(PORT.http);
