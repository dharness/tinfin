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
			profile.username = $("input#inputUser").val();
		} else if (type == 'cp') {
			profile.isPrize = false;
			profile.username = $("input#inputUser").val();
		}
		if (type == 'dsc') {
			profile.desc = $("#profileDescription").val();
			//upload(profile.desc);
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
	var s = ++myScore;
	$('#myScore').html("<h2>" + s + "<\/h2");
	moveRight($('#slider'));
	socket.emit('click', $('input').val());
}

function upload() { // uploads the session's current profile object
	console.log(profile.desc);
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
				addCard(bitches[i].username, bitches[i].desc, bitches[i].bidCount, bitches[i].picture);
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
		if (parseInt(response.bidCount) == 1) {
			// start a game
			alert('Starting a game')
			window.location.assign('/#/gameplay')
		}
	});
}



function moveLeft(obj) {
	obj.animate({
		'marginLeft': "-=15px" //moves left
	}, "fast");
}

function moveRight(obj) {
	obj.animate({
		'marginLeft': "+=15px" //moves right
	}, "fast");
}

function initCasey() {

	$('#rumples').on('click', function() {
		if ($('#cynthia').val() != '') {
			$('#doesntwork').html('')
			profile.picture = $('#cynthia').val();
			window.location.assign("#/prize")
			$("#photoupload").attr('disabled', 'disabled');


		} else {
			alert('Wise guy eh? Fill out the shit')
		}
	})

}