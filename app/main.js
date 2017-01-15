import fs from 'fs';
import http from 'http';
import http2 from 'http2';

const PORT = {
    http: 80,
    http2: 443,
};
const options = {
    cert: fs.readFileSync('./certs/cert.pem'),
    key: fs.readFileSync('./certs/key.pem'),
};

const router = (type, req, res) => {
    res.end(`You are connected via ${type}\nYou hit: ${req.url}`);
};

http.createServer(router.bind(null, 'http'))
    .listen(PORT.http);

http2.createServer(options, router.bind(null, 'http2'))
     .listen(PORT.http2);
