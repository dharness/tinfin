var _location;
var _http;
var enemyScore = 0;
var myScore = 0;
myapp.controller('loginController', function($scope, $http, $location, $rootScope) {
	_http = $http;

	$scope.goTo = function(path, type) {

		if (type == 'p') {
			profile.isPrize = true;
		} else if (type == 'cp') {
			profile.isPrize = false;
		}


		$location.path('/' + path)
	}



	$scope.setIsPrize = function(prize) { // prize is either true or false	
		profile.isPrize = prize;

		console.log(profile);
	}

	$scope.setGender = function(genderType) {
		profile.gender = genderType;

		upload();
		getBitches();
	}
});

socket = io.connect();
var socket = io();

window.onbeforeunload = function() {
	socket.emit('userLeaving', $('input').val());
}

window.session.addClient(socket);

// listen for a click signal and update the score
socket.on('click', function(msg) {
	$('#enemyScore').html(++enemyScore);
	moveLeft($('#slider'));
});

socket.on('findSelf', function(msg) {
	window.session.id = msg;
});

function sendMessage() {
	$('#myScore').html(++myScore);
	moveRight($('#slider'));
	socket.emit('click', $('input').val());
}

function upload() { // uploads the session's current profile object


	console.log(profile);

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
		bitches = response;

	});
}

function placeBid(prizeUsername) {
	var sendData = {
		username: prizeUsername
	};
	$.ajax({
		type: 'POST',
		data: sendData,
		url: '/placeBid'
	}).done(function(response) {
		console.log(response);
		if (parseInt(response.bidCount) == 2) {
			// start a game
		}
	});
}



function moveLeft(obj) {
	obj.animate({
		'marginLeft': "-=10px" //moves left
	}, "fast");
}

function moveRight(obj) {
	obj.animate({
		'marginLeft': "+=10px" //moves right
	}, "fast");
}

function initCasey() {

	$('#rumples').on('click', function() {
		if ($('#cynthia').val() != '') {
			$('#doesntwork').html('')
			window.location.assign("/")
			profile.picture = $('#cynthia').val();


		} else {
			alert('wise guy eh? fill out the shit')
		}

		// document.getElementById("buttonsandstuff").innerHTML=strVar;
	})

}