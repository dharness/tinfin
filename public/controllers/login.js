var _location;
var enemyScore = 0;
var myScore = 0;
myapp.controller('loginController', function($scope, $http, $location, $rootScope) {

	$scope.goTo = function(path, type) {

		if (type == 'p') {
			$http.post('/addWoman', {
				username: 'hellen'
			}).
			success(function(data, status, headers, config) {});
		}

		if (path == 'gameplay') {
			window.location.assign('clickme/clickmebitch.html');
		}
	}



	$scope.setIsPrize = function(prize) { // prize is either true or false	
		profile.isPrize = prize;

		console.log(profile);
	}

	$scope.setGender = function(genderType) {
		profile.gender = genderType;

		console.log(profile);

		// the following code should be moved to whichever option is called last
		if (profile.isPrize == "true") {
			upload();
		} else {
			getBitches();
		}



		console.log(bitches);
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

<< << << < HEAD === === =
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

>>> >>> > d42066c000c2dfebc61f8549ac1c321108970785

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

function caseyMoves() {
	alert('ok')
	_location.path('/gameplay')
}

function initCasey() {
	var imgurl = "";
	$('#rumples').on('click', function() {
		if ($('#cynthia').val() != '') {
			$('#doesntwork').html('')
			window.location.assign("/")
		} else {
			alert('wise guy eh? fill out the shit')
		}

		// document.getElementById("buttonsandstuff").innerHTML=strVar;
	})

}