## Directives
#### Make up your own HTML

Directives are one of the most powerful features of AngularJS. They essentially allow you to make up your own version HTML and implement it using more HTML and javascript.

### Exercise 1

You're creating a recipe app, and your revenue source is affiliate marketing with local grocery stores (you're probably not making very much, but that's ok). On every view of the application, you have to show the user's shopping list, so you decide to create a directive to show the list (so that you don't have to rewrite the list code on every page).

For this lab, you just need to create a directive that displays the list. The directive itself will be an element, and it needs to have an attribute whose value is the ```shopping_list``` variable (this variable can be renamed to anything you want).

Include this bit here so that your scope ```shopping_list``` variable is initialized (normally this would come from your controller):
```
<div ng-init="shopping_list = ['Cereal', 'Milk', 'Tortillas', 'Fajita Seasoning', 'Cheese', 'Green Onion', 'Bell Peppers', 'Gala Apples', '. . . whatever looks good']"></div>
```

Here is what the directive might look like:
```
<my-list-repeat list="shopping_list"></my-list-repeat>
```

And here is an example of what the resulting html could be:
```
<ul>
	<li>Cereal</li>
	<li>Milk</li>
	<li>Tortillas</li>
	<li>Fajita Seasoning</li>
	<li>Cheese</li>
	<li>Green Onion</li>
	<li>Bell Peppers</li>
	<li>Gala Apples</li>
	<li>. . . whatever looks good</li>
</ul>
```

#### Help

In case you forgot (I always have to look this up), here is the syntax for a directive:
```
angular.module('appName', [])
.directive('camelCaseDirectiveName', function () {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			list: '='
		},
		link: function (scope, element, attributes) {
		},
		template: '<!-- html template -->'
	};
});
```