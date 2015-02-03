## Directives
#### Make up your own HTML

Directives are one of the most powerful features of AngularJS. They essentially allow you to make up your own version HTML and implement it using more HTML and javascript.

### Exercise 1

For this exercise, you will write a custom ng-repeat directive to get a feel for the way it might work. The directive will just print out an unordered list of a given array.

And include this bit here so that your scope variable is initialized:
```
<div ng-init="shopping_list = ['Cereal', 'Milk', 'Tortillas', 'Fajita Seasoning', 'Cheese', 'Green Onion', 'Bell Peppers', 'Gala Apples', '. . . whatever looks good']"></div>
```

Here is what the directive might look like:
```
<my-list-repeat value="shopping_list"></my-list-repeat>
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