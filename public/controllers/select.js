myapp.controller('selectController', function($scope, $location) {
	loc = $location;

	var card = $("#template").html();
	getBitches();

});

function joinByTitle(title) {
	alert(window.title)
}


function addCard(title, message) {

	var strVar = "";
	strVar += "			<div class=\"col-lg-3\" id=\"divid" + title + "\">";
	strVar += "				<div class=\"panel panel-default\" style=\"border-radius:5px;\">";
	strVar += "				    <div class=\"panel-heading\" id='title'>" + title + "<\/div>";
	strVar += "			   		<div class=\"panel-body\">";
	strVar += "						<center><img src=\"http:\/\/mindsparx.in\/wp-content\/uploads\/2013\/07\/Dummy-Profile-Picture.jpg\" class=\"img-responsive\" style = \"max-width:200px\">";
	strVar += "						<p style=\"text-align:center\">" + message + "<\/p><br>";
	strVar += "						<center><div class=\"btn-group\" role=\"group\" aria-label=\"...\">";
	strVar += "						    <button type=\"button\" class=\"btn btn-success\" id = \"join" + title + "\"" + ">Join<\/button>";
	strVar += "						    <button type=\"button\" class=\"btn btn-danger\" id = \"pass" + title + "\"" + ">Pass<\/button>";
	strVar += "						<\/div>";
	strVar += "			   		<\/div>";
	strVar += "				<\/div>				";
	strVar += "			<\/div>";

	$("#select").prepend(strVar);

	$('#join' + title).on('click', function() {
		socket.emit('joinRoom', title);
	})

	socket.on('updateJoin', function(msg) {
		alert(msg);
		alert($('join' + msg) );
	})

	$('#pass' + title).on('click', function() {
		$('#divid' + title).empty();
		$('#divid' + title).remove();
	})

}