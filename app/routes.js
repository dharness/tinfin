//================================Routes===========================================//

module.exports = function(app) {

    //use this to check the current user
    app.post('/addWoman', function(req, res) {
    	console.log(req.body.username);

    });

}