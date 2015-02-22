var Session = function(){
	this.clients = [];
	this.id = null;
	this.oponentId = null;
	this.maxClients = 2;
	console.log('making a new session');
}

Session.prototype.addClient = function(socket) {
	this.clients.push(socket);
	if(this.clients.length == this.maxClients - 1) {
		this.beginGame();
		console.warn('game beginning');
	}
}

Session.prototype.beginGame = function() {
	console.warn('this doesnt do anything yet - Ryan, I assume you will want to change this')
}

window.session = new Session();