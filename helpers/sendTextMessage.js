'use strict';

let callSendAPI = require('./callSendAPI');

module.exports = function (recipientId, messageText) {
    
    var messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            text: messageText,
            metadata: "DEVELOPER_DEFINED_METADATA"
        }
    };

    callSendAPI(messageData);
};