'use strict';

let callSendAPI = require('./callSendAPI');
let config = require('config');
const SERVER_URL = (process.env.SERVER_URL) ?
    (process.env.SERVER_URL) :
    config.get('serverURL');

module.exports = function (recipientId, filename) {

    var messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            attachment: {
                type: "video",
                payload: {
                    url: SERVER_URL + `/assets/${filename}`
                }
            }
        }
    };

    callSendAPI(messageData);
};