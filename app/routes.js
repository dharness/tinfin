//================================Routes===========================================//

module.exports = function(app) {

    //use this to check the current user
    app.get('/gameplay', function(req, res) {
        res.render('gameplay');
    });

}