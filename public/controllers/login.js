var myStainCount = 100; // create the controller and inject Angular's $scope
myapp.controller('loginController', function($scope, $http, $location, $rootScope) {

	$scope.goTo = function(path, loc) {
		window[loc] = path;
		$location.path('/' + path);
	}

});