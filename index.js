//server

var koa = require('koa');
var fs = require('fs');

var readFileThunk = function(src) {
  return new Promise(function (resolve, reject) {
    fs.readFile(src, {'encoding': 'utf8'}, function (err, data) {
      if(err) return reject(err);
      resolve(data);
    });
  });
}

var app = koa();

app.use(router.get('/', function *(){
  this.body = yield readFileThunk(__dirname + '/index.html');
}));

app.listen(80);
console.log('Koa listening on port 80');