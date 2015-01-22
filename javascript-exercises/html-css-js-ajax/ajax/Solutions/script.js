function get_request(url, callback) {
   var request = new XMLHttpRequest();

   request.open('GET', url, true);

   request.onload = function() {
      callback(request.response);
   };

   request.send();
}


get_request('http://increscent.org:9000/contacts', function(contacts_response) {
   get_request('http://increscent.org:9000/messages', function(messages_response) {
      var contacts = JSON.parse(contacts_response);
      var messages = JSON.parse(messages_response);

      var html_messages = '';
      for (var i = 0; i < messages_response.length; i++) {
         if (!messages[i]) continue;
         var id = messages[i].user_id;
         var contact_name = 'N/A';
         for (var key in contacts) {
            if (contacts[key].id === id) {
               contact_name = contacts[key].name;
            }
         }

         html_messages += '<p>' + contact_name + ': ' + messages[i].text + '</p>';
      }
      document.getElementById('messages').innerHTML = html_messages;
   });
});
