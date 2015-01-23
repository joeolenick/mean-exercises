var XMLHttpRequest = require('xhr2');

var request = new XMLHttpRequest();

request.open("GET", "http://coinabul.com/api.php");

request.onload = function() {
  var data = JSON.parse(request.response);
  console.log("Price of bitcoin: $" + data.BTC.USD);

};

request.send();
