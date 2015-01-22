var requestContacts = new XMLHttpRequest();
var requestMessages = new XMLHttpRequest();

//GET and display contact information.
requestContacts.open('GET','http://increscent.org:9000/contacts', true);
requestContacts.onload = function(){

  var data = JSON.parse(requestContacts.response);

  for (var i = 0; i<data.length; i++){
  if (document.getElementsByClass('Contact')){
    myElement = document.getElementById("1" + 1).innerHTML = data[i]["name"];
  }

  }
};
//GET and display message from contacts.

requestMessages.open('GET','http://increscent.org:9000/messages');
requestMessages.onload = function() {

  var data = JSON.parse(requestMessages.response);

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
