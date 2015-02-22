myapp.controller('selectController', function($scope) {


	var card = $("#template").html();
	getBitches();

});

function joinByTitle(title) {
	alert(window.title)
}


function addCard(title, message) {
	window.title = title
	var strVar = "";
	strVar += "			<div class=\"col-lg-3\" >";
	strVar += "				<div class=\"panel panel-default\" style=\"border-radius:5px;\">";
	strVar += "				    <div class=\"panel-heading\" id='title'>" + title + "<\/div>";
	strVar += "			   		<div class=\"panel-body\">";
	strVar += "						<center><img src=\"http:\/\/mindsparx.in\/wp-content\/uploads\/2013\/07\/Dummy-Profile-Picture.jpg\" class=\"img-responsive\" style = \"max-width:200px\">";
	strVar += "						<p style=\"text-align:center\">" + message + "<\/p><br>";
	strVar += "						<center><div class=\"btn-group\" role=\"group\" aria-label=\"...\">";
	strVar += "						    <button type=\"button\" class=\"btn btn-success\">Join<\/button>";
	strVar += "						    <button type=\"button\" class=\"btn btn-danger\">Pass<\/button>";
	strVar += "						<\/div>";
	strVar += "			   		<\/div>";
	strVar += "				<\/div>				";
	strVar += "			<\/div>";

	$("#select").prepend(strVar);

}