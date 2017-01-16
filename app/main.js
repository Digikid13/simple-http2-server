import fs from 'fs';
import http2 from 'http2';

const PORT = 8000;
const options = {
    cert: fs.readFileSync('./certs/cert.pem'),
    key: fs.readFileSync('./certs/key.pem'),
};

const requestHandler = (req, res) => {
    res.end(`You connected to ${req.url}`);
};

http2.createServer(options, requestHandler)
     .listen(PORT);
