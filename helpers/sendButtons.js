'use strict';

let callSendAPI = require('./callSendAPI');

module.exports = function (recipientId, text, buttons) {
    console.log(`Respond to ${recipientId} with "${text}"`);

    var messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            attachment: {
                type: 'template',
                payload: {
                    template_type: 'button',
                    text: text,
                    buttons: buttons
                }
            }
        }
    };

    callSendAPI(messageData);
};