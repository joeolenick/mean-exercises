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