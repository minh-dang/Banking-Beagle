'use strict';
let sendTextMessage = require('../helpers/sendTextMessage');
let sendImage = require('../helpers/sendImage');

const responses = [
  "Bark bark",
  "Woof"
]

let trigger = function(actionName){
    return actionName === 'bark';
};

let action = function(recipientId, resultObject) {
    let index = Math.floor((Math.random() * responses.length));
    sendTextMessage(recipientId, responses[index]);
    sendImage(recipientId, 'https://upload.wikimedia.org/wikipedia/en/f/f8/Internet_dog.jpg');
};

module.exports = {
    trigger: trigger,
    action: action
};