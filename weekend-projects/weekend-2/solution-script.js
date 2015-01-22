// make a function that will send a get request to the server, and call a function when it's done
function get_request(url, callback) {
	var request = new XMLHttpRequest();

	request.open('GET', url, true);

	request.onload = function () {
		callback(request.response, request);
	};

	request.send();
}

// these variables hold the lists of contacts and messages
var contacts, messages;

// this function will be used as the callback for each get request
function handle_request(response, request) {
	// since this function will be the callback for both requests (/contacts and /messages),
	// we must check which response was returned
	var response_url = request.responseURL;
	console.log('A response was returned from this url: ' + response_url);
	if (response_url.indexOf('contacts') > -1) {
		// turn response data into javascript object
		contacts = JSON.parse(response);
	} else if (response_url.indexOf('messages') > -1) {
		// turn response data into javascript object
		messages = JSON.parse(response);
	}
	
	// only continue through this function if both 'contacts' and 'messages' have been defined (if both requests have returned)
	if (!messages || !contacts) return;
	
	parse_messages();
}

function parse_messages() {
	// this string will be inserted into the html file
	var html_messages = '';
	
	// loop over the messages
	for (var i = 0; i < messages.length; i++) {
		if (!messages[i]) continue;
		var id = messages[i].user_id;
		var contact_name = 'N/A';
		
		// find the contact that matches the 'id'
		for (var key in contacts) {
			if (contacts[key].id === id) {
				contact_name = contacts[key].name;
			}
		}
		
		html_messages += '<p>' + contact_name + ': ' + messages[i].text + '</p>';
	}
	
	// insert the 'html_messages' string into the html file
	document.getElementById('messages').innerHTML = html_messages;
}

// now call the two requests
get_request('http://increscent.org:9000/contacts', handle_request);
get_request('http://increscent.org:9000/messages', handle_request);