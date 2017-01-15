'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _http3 = require('http2');

var _http4 = _interopRequireDefault(_http3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = {
    http: 8000,
    http2: 8001
};
var options = {
    cert: _fs2.default.readFileSync('./cert.pem'),
    key: _fs2.default.readFileSync('./key.pem')
};

var router = function router(type, req, res) {
    res.end('You are connected to: ' + type + '\nYou hit: ' + req.url);
};

_http4.default.createServer(options, router.bind(null, 'http2')).listen(PORT.http2);

_http2.default.createServer(router.bind(null, 'http')).listen(PORT.http);