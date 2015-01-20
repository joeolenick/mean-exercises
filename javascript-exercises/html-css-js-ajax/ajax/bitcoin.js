var XMLHttpRequest = require('xhr2');

var request = new XMLHttpRequest();

request.open("GET", "http://coinabul.com/api.php");

request.onload = function() {
  var data = JSON.parse(request.response);
  console.log("Price of bitcoin: $" + data.BTC.USD);
  console.log("Price of Gold   : $" + data.Gold.USD);
  console.log("Price of Silver : $" + data.Silver.USD);

  // hint: if you want to see all the data returned in the response, uncomment the following line
  //console.log(data);
};

request.send();
