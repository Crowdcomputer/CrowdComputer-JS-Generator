$(document).ready(function(){
	//on form submit it collects all the information from the work and sends it to Crowd Computer
	$('form input[type=submit]').click(function(){
		sendDataToCC(JSON.stringify(collectFormData($(this).closest('form'))));
	});
});