'use strict';
let sendButtonMessage = require('../helpers/sendButtonMessage');

const ACTIONS = ['interestRate'];

let trigger = function(actionName){
    return ACTIONS.indexOf(actionName) >= 0;
};

let action = function(recipientId, result) {
	var data = {
        text: 'All our interest rates information can be found on our website!',
        title: 'Check it out here!',
        url: 'http://www.bankwest.com.au/rates-fees',
        buttonType: 'web_url'
	}

    switch (result.action) {
        default:
        	sendButtonMessage(recipientId, data);
            break;
    }
};

module.exports = {
    trigger: trigger,
    action: action
};