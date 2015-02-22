myapp.controller('selectController', function($scope, $location) {
	loc = $location;

	var card = $("#template").html();
	getBitches();

});


function addCard(title, message, bidCount, img) {

	var strVar = "";
	strVar += "			<div class=\"col-lg-3\" id=\"divid" + title + "\">";
	strVar += "				<div class=\"panel panel-default\" style=\"border-radius:5px;\">";
	strVar += "				    <div class=\"panel-heading\" id='title'>" + title + "<\/div>";
	strVar += "			   		<div class=\"panel-body\">";
	strVar += "						<center><img src=\"" + img + "\" class=\"img-responsive\" style = \"max-width:200px\" alt = " + "\"http:\/\/mindsparx.in\/wp-content\/uploads\/2013\/07\/Dummy-Profile-Picture.jpg\"" + ">";
	strVar += "						<p style=\"text-align:center\">" + message + "<\/p><br>";
	strVar += "						<center><div class=\"btn-group\" role=\"group\" aria-label=\"...\">";
	strVar += "						    <button type=\"button\" class=\"btn btn-success\" id = \"join" + title + "\"" + ">Join <span class=\"badge\" id = \"sp" + title + "\"" + ">" + bidCount + "<\/span> <\/button>";
	strVar += "						    <button type=\"button\" class=\"btn btn-danger\" id = \"pass" + title + "\"" + ">Pass<\/button>";
	strVar += "						<\/div>";
	strVar += "			   		<\/div>";
	strVar += "				<\/div>				";
	strVar += "			<\/div>";

	$("#select").prepend(strVar);

	$('#join' + title).on('click', function() {
		socket.emit('joinRoom', title);
		var v = 0;
		v += $('#sp' + title).html();
		parseInt(v);
		console.log(v++);
		$('#sp' + title).html(v++);
		placeBid(title, profile.username);
	})

	$('#pass' + title).on('click', function() {
		$('#divid' + title).empty();
		$('#divid' + title).remove();
	})

}