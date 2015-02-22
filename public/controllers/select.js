myapp.controller('selectController', function($scope) {


	var card = $("#template").html();


	for(var i = 0; i <= 3; i++){
		$("#select").prepend(card);
	}
	

});
