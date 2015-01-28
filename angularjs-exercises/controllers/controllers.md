## Controllers
#### (They're ok too)

For this exercise, find a way to display the variables defined in the controller on the view.

*Hint: the `profile_image` variable is an image src*

[index.html](https://github.com/CodingCampus/mean-exercises/blob/master/angularjs-exercises/controllers/index.html)
```
<!DOCTYPE html>
<html ng-app="profileApp">
	<head>
		<title>Profile App</title>
		
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.11/angular.min.js"></script>
		<script src="app.js"></script>
	</head>
	
	<body ng-controller="profileController">
		<!-- the view material goes here -->
	</body>
</html>
```

[app.js](https://github.com/CodingCampus/mean-exercises/blob/master/angularjs-exercises/controllers/app.js)
```
angular.module('profileApp', [])

.controller('profileController', function ($scope) {
  var profile_image = 'http://i.ytimg.com/vi/URTTK2V2CAE/hqdefault.jpg';
  var name = 'Yzma';
  var eye_color = 'blue';
  var expression = 'surprise';
  var thoughts = 'Is that my voice? Is that myyyyyy voice?';
});
```

Once, you finish that, make it better. For example, you could define a lot of different profiles (in an array or something) and use ng-repeat to display them all. This is also a good opportunity to practice your html/css skills.