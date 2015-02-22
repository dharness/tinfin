//================================Routes===========================================//

module.exports = function(app) {

	//use this to check the current user
	app.post('/addWoman', function(req, res) {
		console.log(req.body.username);

	});

	app.post('/upload', function(req, res) {
		console.log(req.body);

		_db.collection('profiles').insert(req.body, function(err, result) {
			console.log(err + " + " + result);
			res.send("upload successful");
		});
	});

	app.get('/database', function(req, res) {
		console.log("gunna display database");

		_db.collection('profiles').find({}).toArray(function(err, result) {
			console.log(err + " + " + result);
			res.send(result);
		});
	});

	app.post('/placeBid', function(req, res) {

		_db.collection('profiles').findOne({
			'username': req.body.prizeUsername
		}, function(err, result) {
			console.log(err);
			console.log(result);
			console.log(result.bidCount);
			if (result) {
				var parsedArray = JSON.parse(result.bidders);
				parsedArray.push(req.body.compUsername);
				result.bidders = JSON.stringify(parsedArray)
				console.log('lllllllll')
				_db.collection('profiles').update({
						'username': req.body.prizeUsername
					}, {
						$set: {
							bidCount: 1 + parseInt(result.bidCount),
							bidders: result.bidders
						}
					},
					function(error, numChanges) {
						console.log(error + " + " + numChanges);
						console.log(result)
						res.send(result);
					}); 
			} else {
				res.send(500);
			}
		});
	});
}