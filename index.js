import express from 'express';

var app = express.createServer();

app.get("/", function (req, res) {

});

app.listen(80);
console.log('Express server started on port %s', app.address().port);