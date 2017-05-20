'use strict';

let callSendAPI = require('./callSendAPI');

module.exports = function (recipientId, data) {
    console.log(`Respond to ${recipientId} with "${data.text}"`);

    if (!data.buttonType) {
        data.buttonType = 'web_url';
    }

    var button = {
        type: data.buttonType,
        title: data.title
    };

    switch (data.buttonType) {
        case 'web_url':
            button.url = data.url;
            break;
        case 'postback':
        case 'phone_number':
        default:
            button.payload = data.payload;
            break;
    }

    var messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            attachment: {
                type: 'template',
                payload: {
                    template_type: 'button',
                    text: data.text,
                    buttons: [button]
                }
            }
        }
    };

    callSendAPI(messageData);
};