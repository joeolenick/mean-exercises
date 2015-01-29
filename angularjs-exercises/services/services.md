## Services

Services are the model part of the [MVC architecture](http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller). In general, you should access your data from services. If you're planning on creating a real MVC implementation, your business logic should reside in services as well.

### Display some product data

The goal of this exercise is to display a product with its information using an angular service.

The product data are stored in the service called `aboutProduct`

You will need to display to the user the following product details:
- product image
- name
- is in stock (yes or no)
- shipping
- thickness
- a link to actually buy the product
- user reviews

Here are some template files to get you started:

[index.html](https://github.com/CodingCampus/mean-exercises/blob/master/angularjs-exercises/services/index.html)
```
<!DOCTYPE html>
<html ng-app="productApp">
	<head>
	  <title>Product View</title>
	</head>
	
	<body ng-controller="productController">
		<!-- Display product information here -->
  	
	  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0-beta.2/angular.min.js"></script>
	  <script src="app.js"></script>
	</body>
</html>
```

[app.js](https://github.com/CodingCampus/mean-exercises/blob/master/angularjs-exercises/services/app.js)
```
angular.module('productApp', [])

.controller('productController', function ($scope) {
	// you code here
})

// product data
.service('aboutProduct', function () {
  this.image = 'http://ecx.images-amazon.com/images/I/81yL5NTvSPL._SL1500_.jpg';
  this.name = 'Premium Toilet Paper';
  this.inStock = true;
  this.shipping = 'Free, 2-Day';
  this.thickness = '5-ply';
  
  this.buy = 'http://www.amazon.com/Big-Mouth-Toys-Dollar-Toilet/dp/B004I09G44/ref=sr_1_2?ie=UTF8&qid=1422495407&sr=8-2&keywords=printed+toilet+paper';
  
  this.reviews = [
    {user_image: 'http://blogs-images.forbes.com/mfonobongnsehe/files/2014/09/bill-gates.jpg', user_review: 'This is the only bathroom tissue I use anymore. It\'s incredibly soft, and reasonably priced.'},
    {user_image: 'http://a4.files.biography.com/image/upload/c_fill,dpr_1.0,g_face,h_300,q_80,w_300/MTE5NTU2MzE2MTY4Njg1MDY3.jpg', user_review: 'I use this :)'}
  ];
});
```

[Here is a good example of angular services](http://fdietz.github.io/recipes-with-angular-js/controllers/sharing-code-between-controllers-using-services.html)
