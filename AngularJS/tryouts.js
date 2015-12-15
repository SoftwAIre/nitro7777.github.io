app.controller('MainController', ['$scope', function($scope) {
	$scope.title = 'Get all the books you want';
  $scope.promo = 'This message is a promo';
  $scope.products = [
    {
      name:'The Book of Trees',
      price: 19,
      pubdate: new Date('2014','03','08'),
      cover: 'img/the-book-of-trees.jpg',
      likes:0
    },
    {
      name: 'Program or be Programmed',
      price: 8,
      pubdate: new Date('2013','08','01'),
      cover:'img/program-or-be-programmed.jpg',
      likes:0
    },
    {
    name:'Seven Habits of Highly Effective People',
    price:12,
    pubdate:new Date('2007','01','02'),
    cover:'https://c2.staticflickr.com/4/3516/4005515519_d305560415_b.jpg',
      likes:0
    },
    {
    name:'The Bible',
    price:1,
    pubdate:new Date('0001','12','25'),
    cover:'https://upload.wikimedia.org/wikipedia/commons/9/99/The_Bible_-_Title_Card.jpg',
      likes:0
    }
  ];
  $scope.plusOne = function(index) {
  	$scope.products[index].likes += 1;
  };
}]);
