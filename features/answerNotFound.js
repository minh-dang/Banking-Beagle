'use strict';
const request = require('request');
let sendButtons = require('../helpers/sendButtons');

let trigger = function(actionName){
    return true;
};

let action = function(recipientId, resultObject) {
    let buttons = [
	    {
	        type: "postback",
	        title: "FAQ",
	        payload: "faq"
	    },
	    {
	        type: "postback",
	        title: "Help",
	        payload: "getHelp"
	    }
	]

	request({
		uri: `https://graph.facebook.com/v2.6/${recipientId}?access_token=EAAD2JSG4ZCZCABAIA3gisJrZAR1lo0Dh68kgapRzfd17AIU1vLwhfIHyLLyya8SXerZBanQ0IV62ggz7MryKsKUXHBpXOk41MihIwKPn15RZAXEQGOHDZCZBzSsbtv47OOCUjO2IZAtHSqTMEix7JsJAMzdtiHGCuywHpg6Ays4XOgZDZD`,
		method: 'GET'
	}, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var custname = JSON.parse(body).first_name;
			console.log(typeof body)
			console.log("Whole response is %s", response);
			console.log("Body response is %s", body);
			console.log("The person name is %s", custname);
			let nameResp = `Sorry ${custname}, I'm not sure what you mean but here a some useful command!`
			sendButtons(recipientId,nameResp,buttons);
		} else {
			if (response && response.error)
	    		console.error(response.error);

	    	let resp = `Sorry, I'm not sure what you mean but here a some useful command!`
	    	sendButtons(recipientId,reso,buttons);
		}
	});
};

module.exports = {
    trigger: trigger,
    action: action
};