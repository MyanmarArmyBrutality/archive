var app = angular.module('myApp', ['ui.bootstrap']);
app.controller('myCtrl', function($scope) {
  $scope.customers = [{
    "Name": "Alfreds Futterkiste",
    "City": "Berlin",
    "Country": "Germany"
  }, {
    "Name": "Ana Trujillo Emparedados y helados",
    "City": "México D.F.",
    "Country": "Mexico"
  }, {
    "Name": "Antonio Moreno Taquería",
    "City": "México D.F.",
    "Country": "Mexico"
  }, {
    "Name": "Around the Horn",
    "City": "London",
    "Country": "UK"
  }, {
    "Name": "B's Beverages",
    "City": "London",
    "Country": "UK"
  }, {
    "Name": "Berglunds snabbköp",
    "City": "Luleå",
    "Country": "Sweden"
  }, {
    "Name": "Blauer See Delikatessen",
    "City": "Mannheim",
    "Country": "Germany"
  }, {
    "Name": "Blondel père et fils",
    "City": "Strasbourg",
    "Country": "France"
  }, {
    "Name": "Bólido Comidas preparadas",
    "City": "Madrid",
    "Country": "Spain"
  }, {
    "Name": "Bon app'",
    "City": "Marseille",
    "Country": "France"
  }, {
    "Name": "Bottom-Dollar Marketse",
    "City": "Tsawassen",
    "Country": "Canada"
  }, {
    "Name": "Cactus Comidas para llevar",
    "City": "Buenos Aires",
    "Country": "Argentina"
  }, {
    "Name": "Centro comercial Moctezuma",
    "City": "México D.F.",
    "Country": "Mexico"
  }, {
    "Name": "Chop-suey Chinese",
    "City": "Bern",
    "Country": "Switzerland"
  }, {
    "Name": "Comércio Mineiro",
    "City": "São Paulo",
    "Country": "Brazil"
  }],
  $scope.people=[],
  $scope.currentPage = 1,
  $scope.numPerPage = 5,
  $scope.maxSize = 5;
  
  
  
  $scope.numPages = function () {
    return Math.ceil($scope.customers.length / $scope.numPerPage);
  };
  
  $scope.$watch('currentPage + numPerPage', function() {
    var begin = (($scope.currentPage - 1) * $scope.numPerPage)
    , end = begin + $scope.numPerPage;
    
    $scope.people = $scope.customers.slice(begin, end);
  });
  
  
});
