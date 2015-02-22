var _location;
var _http;
var enemyScore = 0;
var myScore = 0;
myapp.controller('loginController', function($scope, $http, $location, $rootScope) {
	_http = $http;

	$scope.setIsPrize = function(prize) { // prize is either true or false	
		profile.isPrize = prize;

		console.log(profile);
	}

	$scope.setGender = function(genderType) {
		profile.gender = genderType;
		upload();
	}


	$scope.goTo = function(path, type) {
		if (type == 'p') {
			profile.isPrize = true;
			profile.username = $("input#inputUser").val()
		} else if (type == 'cp') {
			profile.isPrize = false;
			profile.username = $("input#inputUser").val()
		}

		$location.path('/' + path)
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

		for (var i = 0; i < bitches.length; i++) {
			if (bitches[i].isPrize == 'true') {
				addCard(bitches[i].username, 'Dylan rules')
			}
		}

	});
}

function placeBid(prizeUsername, compUsername) {
	var sendData = {
		"prizeUsername": prizeUsername,
		"compUsername": compUsername
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