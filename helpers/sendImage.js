'use strict';

let callSendAPI = require('./callSendAPI');

module.exports = function (recipientId, url) {
    console.log(`Respond to ${recipientId} with "${url}"`);

    var messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            attachment: {
                type: 'image',
                payload: {
                    url: url,
                }
            }
        }
    };

    callSendAPI(messageData);
};