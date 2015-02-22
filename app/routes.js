//================================Routes===========================================//

module.exports = function(app) {

    //use this to check the current user
    app.get('/gameplay', function(req, res) {
        res.render('gameplay');
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
    	console.log("body is next...");
    	console.log(req.body);
  
    	_db.collection('profiles').findOne({'username': req.body.username}, function(err, result) {
			console.log(err);
			console.log(result);
			console.log(result.bidCount);
			if (result) {
				_db.collection('profiles').update({'username': req.body.username},
    									{ $set: { bidCount : 1 + parseInt(result.bidCount)} },
	    								function(err, result) {
		    		console.log(err + " + " + result);
					res.send(result);
				});
			} else {
				res.send("nothing found");
			}
    	});
	});
}