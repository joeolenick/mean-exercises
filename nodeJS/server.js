var app = require('express')();
var fs = require('fs');
var faker = require('faker')

// respond with "hello world" when a GET request is made to the homepage
app.get('/hello', function (req, res) {
  fs.readFile('.hello.html', 'utf8', function (err, data){
  	res.send(data+ '!');
  });
});

app.get('/name', function (req, res){
	res.send(faker.name.findName());
});

app.listen(8083); 