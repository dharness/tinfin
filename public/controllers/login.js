var _location;
myapp.controller('loginController', function($scope, $http, $location, $rootScope) {

	$scope.goTo = function(path) {
		if (path == 'gameplay') {
			window.location.assign('clickme/clickmebitch.html');
		} else {
			$location.path('/' + path);	
		}		
	}

});

socket = io.connect();

var socket = io();

socket.on('full', function(msg) {
	console.log('OK GO')
})

function sendMessage() {
	socket.emit('click', $('input').val());
}