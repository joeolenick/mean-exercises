## Weekend Project for Week 2

You are working on a messaging app, and right now your goal is to display to the user the messages in their feed.

In order to do this, you need to make two different GET requests:
- get the contacts from the server
- get the messages from the server


The url for the contacts request is http://increscent.org:9000/contacts

And the url for the messages request is http://increscent.org:9000/messages

*Note: both of these requests will work in the browser because of their allow-origin header*

Both of these responses will come in [JSON](http://www.w3schools.com/json/) format, so don't forget to `JSON.parse()` them.

You will need to match the message to the contact using each contact's user id. A very simple output could look like this:
```
[Contact1 Name]: [Contact1 message]
[Contact2 Name]: [Contact2 message]
[Contact3 Name]: [Contact3 message]
etc.
```

That would be a little boring though, so try spicing it up with HTML and CSS.

Here's a barebones HTML/JS setup. Put both of these files in the same folder and open the html file with your browser. Remember: everything you output using console.log() will only appear in the [chrome developer console](https://developer.chrome.com/devtools/docs/console).

index.html
```
<!DOCTYPE html>

<html>
	<head>
		<title>
		 Messages App
		</title>
		
		<!-- include css here -->
	</head>
	
	<body>
		<!-- put your html tags here -->
		
		<!-- this includes your javascript file -->
		<script src="script.js"></script>
	</body>
</html>
```

script.js
```
// put your javascript here
```