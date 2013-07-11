$(document).ready(function() {

	//on form submit it collects all the information from the work and sends it to Crowd Computer
	$(document).on("submit", $('form'), function() {
		var metadata = collectFormData(this);
		console.log(metadata);
		sendDataToCC(JSON.stringify(metadata));
	});
});