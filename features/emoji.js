'use strict';
let sendTextMessage = require('../helpers/sendTextMessage');

let trigger = function(actionName){
    return actionName === 'emoji';
};

let action = function(recipientId, resultObject) {
    sendTextMessage(recipientId, "🐶");
};

module.exports = {
    trigger: trigger,
    action: action
};