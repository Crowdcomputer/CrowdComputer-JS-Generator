/*

- getURLParameter (used to get 'parent' parameter from the url)
- sendDataToCC (used to send message_in_JSON to crowdcomputer via postMessage)
- setObjectPathValue (puts to the given object value of the given element)
- collectFormData (returns an object with information of elements of the given form)

*/

function getURLParameter(name) {
	var regexS = "[\\?&]" + name + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var tmpURL = window.location.href;
	var results = regex.exec(tmpURL);
	if (results == null)
		return null;
	return results[1];
}
function sendDataToCC(message_in_JSON,parent_url) {
	var url;
	if (parent_url) //if parent_url is defined as an argument to this function
		url=parent_url;
	else if(getURLParameter('parent')) //if parent_url is defined as a url parameter
		url=parent_url=getURLParameter('parent')
	else  //else it takes the window.parent.location
		url = (window.location != window.parent.location) ? document.referrer : document.location;
	$.postMessage((message_in_JSON), url, parent);
}
function setObjectPathValue(source, path, value) {
	var parts = path.split('.'), len = parts.length, target = source;

	for (var i = 0, part; i < len - 1; i++) {
		part = parts[i];
		target = target[part] == undefined ? (target[part] = {}) : target[part];
	}
	target[parts[len - 1]] = value;
	return target;
}
function collectFormData(form) {
	var CM_data = new Object();
	$(form).find('[name]').each(function() {
		setObjectPathValue(CM_data, $(this).attr('name'), $(this).val());
	});
	return CM_data;
}