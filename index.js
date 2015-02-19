var express = require('express');
var request = require('request');

// Constants
var PORT = 8080;

// App
var app = express();
app.get('/', function (req, res) {
    res.send('A prototype of a micro-service hosting service. An example can be retrieved from https://funcist.ns.mg/7c9600b9d2a5f3b991ab\n');
});

app.get('/:gist_id', function (req, res) {
    request({
        url: 'https://api.github.com/gists/' + req.params.gist_id,
        headers: {
            'User-Agent': 'request'
        }
    }, function(error, response, body) {
        var files = JSON.parse(body).files;
        var filename = Object.keys(files)[0];
        var content = files[filename].content;
        var m = new module.constructor();
        m._compile(content, filename);
        res.send(m.exports);
    });
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
