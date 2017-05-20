'use strict';
let sendButtonMessage = require('../helpers/sendButtonMessage');

let trigger = function(actionName){
    return actionName === 'findNearestAtm';
};

let action = function(recipientId, resultObject) {
    var data = {
        text: 'You can find the nearest ATM and stores on our website.',
        title: 'Click Here',
        url: 'https://www.bankwest.com.au/find-us',
        buttonType: 'web_url'
    };

    sendButtonMessage(recipientId, data);
};

module.exports = {
    trigger: trigger,
    action: action
};