# AJAX
Stands for Asynchronous Javascript And XML. **That makes perfect sense right?**

### What is AJAX?
It is the methodology for making a request to the server and getting back data AFTER a page load.

### What is a request?
Something the browser makes to get files and data back from a server.

![Client Server Model](./img/csm.png)

### Different types of requests:
- GET
- POST
- PUT
- DELETE
- OPTIONS

### Request basics
- method
- url
- headers
- body (If sending data)

## How to create our own "Request"
There are a couple simple steps to making a request:
- Create a request object
- Set request method, URL
- Set request headers
- Set request event handlers (Success, failure)
- Set request data
- Send request

### Creating a request object (XHR)
```javascript
var req = new XMLHttpRequest();
```

### Setting up the request
```javascript
// Setting the XHR method, URL
req.open('GET', 'http://cit261-api.herokuapp.com/api');

// Setting request headers
req.setRequestHeader('Accept', 'application/json');

// Setting up request handlers
req.onreadystatechange = handlerFunction;
/** ABOUT THIS
This function will handle every change to the readyState. readystate has 5 possible
states:

0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready
**/

req.onload = handlerFunction; // This will only fire on the receipt of a response

// Sending the request
req.send();
```
