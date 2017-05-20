'use strict';
let sendTextMessage = require('../helpers/sendTextMessage');

let trigger = function(actionName){
    return actionName === 'getHelp';
};

let action = function(recipientId, resultObject) {
    sendTextMessage(recipientId, 'I can do all sorts. I can help locate an ATM, exchange currencies, provide information on our products and interest rates, provide travel information and much more. What do you need help with? All you need to do is ask.');
};

module.exports = {
    trigger: trigger,
    action: action
};