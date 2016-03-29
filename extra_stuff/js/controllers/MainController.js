app.controller('MainController', ['$scope', function($scope) {
  $scope.apps = [
    {
      icon:"https://upload.wikimedia.org/wikipedia/commons/0/02/06_Chgo_Beach_Soccer_Invitational_Challenge_me.JPG",
      title:'smoove',
      developer:'CGM',
      price: 1.99
    },
    {
      icon: 'http://fairsync.com/wp-content/uploads/2015/12/120315_1451_11.jpg',
      title:'socialEase',
      developer:'CGM',
      price: 2.99
    },
    {
      icon: 'http://orig09.deviantart.net/83cf/f/2012/343/d/c/my_fingers_by_zita952-d5ni3an.jpg',
      title:'friendlEase',
      developer:'CGM',
      price: 6.99
    },
    { 	icon:"https://upload.wikimedia.org/wikipedia/commons/b/b2/Location_map_United_States_Manhattan.png",
      title:'Activ',
      developer:'CGM',
      price:3.99
    }
  ];
}]);
