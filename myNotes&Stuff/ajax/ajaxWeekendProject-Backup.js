var requestContacts = new XMLHttpRequest();
var requestMessages = new XMLHttpRequest();

//GET and display contact information.
requestContacts.open('GET','http://increscent.org:9000/contacts', true);
requestContacts.onload = function(){

  var data = JSON.parse(requestContacts.response);
  console.log(data[0]);
  for (var i = 0; i<data.length; i++){
  var paragraphNode = document.createElement("p");
  var text = document.createTextNode(data[i].name);
  paragraphNode.appendChild(text);
  document.body.appendChild(paragraphNode);
  }
};
//GET and display message from contacts.

requestMessages.open('GET','http://increscent.org:9000/messages');
requestMessages.onload = function() {
  var data = JSON.parse(requestMessages.response);
  console.log(data[0]);
  for (var i = 0; i<data.length; i++){
    var paragraphNode = document.createElement("p");
    var text = document.createTextNode(data[i].text);
    paragraphNode.appendChild(text);
    document.body.appendChild(paragraphNode);
  }
};
requestContacts.send();
requestMessages.send();
//setTimeout(requestMessages.send(), 300);
