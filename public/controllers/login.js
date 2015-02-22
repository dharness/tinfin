var _location;
var enemyScore = 0;
var myScore = 0;
myapp.controller('loginController', function($scope, $http, $location, $rootScope) {
	_location = $location;
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

function initCasey() {var imgurl = "";
	$('#rumples').on('click', function() {
	if ($('#cynthia').val() != '')
	{
		$('#doesntwork').html('')
		window.location.assign("/")
	}
	else {
		alert('wise guy eh? fill out the shit')
	}
	
	// document.getElementById("buttonsandstuff").innerHTML=strVar;
})

}
