'use strict';
let sendTextMessage = require('../helpers/sendTextMessage');

const responses = [
  "Thanks, I hope I helped.",
  "Thank you, don't forget to vote for me at the marketplace."
]

let trigger = function(actionName){
    return actionName === 'receiveCompliment';
};

let action = function(recipientId, resultObject) {
    let index = Math.floor((Math.random() * responses.length));
    sendTextMessage(recipientId, responses[index]);
};

module.exports = {
    trigger: trigger,
    action: action
};