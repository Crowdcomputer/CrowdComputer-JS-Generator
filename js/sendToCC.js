//GET url pars
console.log("--this code will send data to CrowdComputer");

$(document).ready(function(){
	//on form submit it collects all the information from the work and sends it to Crowd Computer
	$('form input[type=submit]').click(function(){
		sendDataToCC(JSON.stringify($(this).closest('form').serializeFormJSON()));
	});
});