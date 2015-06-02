var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

var refresh = function() {

$http.get('/employeelist').success(function(response) {
	console.log("I got the data I requested");
	$scope.employeelist = response;
	$scope.employee = "";
});
};
    refresh();

$scope.addEmployee = function() {
	console.log($scope.employee);
	$http.post('/employeelist', $scope.employee).success(function(response) {
		console.log(response);
		refresh();
			});
};

$scope.remove = function(id) {
	console.log(id);
	$http.delete('/employeelist/' + id).success(function(response){
		refresh();
	});
};

$scope.edit = function(id) {
  console.log(id);
  $http.get('/employeelist/' + id).success(function(response) {
    $scope.employee = response;
  });
};

$scope.update = function() {
	console.log($scope.employee._id);
	$http.put('/employeelist/' + $scope.employee._id, $scope.employee).success(function(response){
		refresh();

	})
};

$scope.deselect = function() {
	$scope.employee = "";
}

}]);﻿
