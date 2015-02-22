var _location;
myapp.controller('loginController', function($scope, $http, $location, $rootScope) {
	_location = $location;
	$scope.goTo = function(path, loc) {
		window[loc] = path;
		$location.path('/' + path);
	}

});

socket = io.connect();

var socket = io();

socket.on('full', function(msg) {
	_location.path('/');
	console.log('OK GO')
	// alert('full' + msg);
	// window.location.href = "http://www.w3schools.com";
})

function sendMessage() {
	socket.emit('chat message', 'AAAAGGHHH');
}