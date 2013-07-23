/*


- serializeFormJSON - a jQuery extension, which serialise a given form into JSON format 
- getURLParameter (used to get 'parent' parameter from the url)
- decode method decodes the query parameters that were URL-encoded
- sendDataToCC (used to send message_in_JSON to crowdcomputer via postMessage)


*/

(function($) {
	$.fn.serializeFormJSON = function() {

		var o = {};
		var a = this.serializeArray();
		$.each(a, function() {
			if (o[this.name]) {
				if (!o[this.name].push) {
					o[this.name] = [o[this.name]];
				}
				o[this.name].push(this.value || '');
			} else {
				o[this.name] = this.value || '';
			}
		});
		return o;
	};
})(jQuery);

function getURLParameter(name) {
	var regexS = "[\\?&]" + name + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var tmpURL = window.location.href;
	var results = regex.exec(tmpURL);
	if (results == null)
		return null;
	return results[1];
}

function decode(strToDecode) {
	var encoded = strToDecode;
	return unescape(encoded.replace(/\+/g, " "));
}

function sendDataToCC(message_in_JSON,parent_url) {
	var url;
	if (parent_url) //if parent_url is defined as an argument to this function
		url=parent_url;
	else if(getURLParameter('parent')) //if parent_url is defined as a url parameter
		url=parent_url=getURLParameter('parent')
	else  //else it takes the window.parent.location
		url = (window.location != window.parent.location) ? document.referrer : document.location;
	console.log('sending data via postMessage to '+url);
	$.postMessage((message_in_JSON), url, parent);
}