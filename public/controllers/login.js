var _location;
myapp.controller('loginController', function($scope, $http, $location, $rootScope) {

	$scope.goTo = function(path) {
		$location.path('/' + path);			
	}

	$scope.setIsPrize = function(prize) {	// prize is either true or false	
		profile.isPrize = prize;

		console.log(profile);
	}

	$scope.setGender = function(genderType) {	
		profile.gender = genderType;

		console.log(profile);

		// the following code should be moved else where
		if (profile.isPrize == "true") {
			upload();
		} else {
			getBitches();
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

function upload() { // uploads the session's current profile object
	$.ajax({
		type: 'POST',
		data: profile,
		url: '/upload'
	}).done(function(response) {
		console.log(response);
	});
}

function getBitches() { // displays entire contents of database
	$.ajax({
		type: 'GET',
		url: '/database'
	}).done(function(response) {
		console.log(response);
	});
}

function placeBid(prizeUsername) {
	$.ajax({
		type: 'POST',
		data: prizeUsername,
		url: '/placeBid'
	}).done(function(response) {
		console.log(response);
	});
}