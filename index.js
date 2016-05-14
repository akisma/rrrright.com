//server

var koa = require('koa');

var app = koa();
app.listen(80);
console.log('Koa listening on port 80');