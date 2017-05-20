'use strict';
let sendTextMessage = require('../helpers/sendTextMessage');

const greetResp = [
	"Woof Woof! May I help you with something?",
	"Hiya, how can I help you?",
	"Hello, what can I help with?"
]

const farewellResp = [
	"Thanks for using Banking Beagle, NAP TIME!",
	"Have a nice day! I'm going for a walk",
	"Let me know if you need help with anything else"
]

let trigger = function(actionName){
	if (actionName === 'greeting')
		return true
	else if (actionName === 'farewell')
		return true
};

let action = function(recipientId, resultObject) {
	switch (resultObject.action) {
		case 'greeting':
			let greetIndex = Math.floor((Math.random() * greetResp.length));
    		sendTextMessage(recipientId, greetResp[greetIndex]);
    		break;
    	case 'farewell':
    		let farewellIndex = Math.floor((Math.random() * farewellResp.length));
    		sendTextMessage(recipientId, farewellResp[farewellIndex]);
    		break;
	}
};

module.exports = {
    trigger: trigger,
    action: action
};