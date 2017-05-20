'use strict';

const request = require('request');
const config = require('config');
const PAGE_ACCESS_TOKEN = (process.env.MESSENGER_PAGE_ACCESS_TOKEN) ?
    (process.env.MESSENGER_PAGE_ACCESS_TOKEN) :
    config.get('pageAccessToken');

module.exports = function (messageData) {
    
    if (messageData.message.text){
        console.log(`Responding to ${messageData.recipient.id} with "${messageData.message.text}"`);
    }
    if (messageData.message.attachment && messageData.message.attachment.type === "template"){
        console.log(`Sending a templated message to ${messageData.recipient.id}`)
    }

    request({
        uri: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token: PAGE_ACCESS_TOKEN},
        method: 'POST',
        json: messageData
    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var recipientId = body.recipient_id;
            var messageId = body.message_id;

            if (messageId) {
                console.log("Successfully sent message with id %s to recipient %s",
                    messageId, recipientId);
            } else {
                console.log("Successfully called Send API for recipient %s",
                    recipientId);
            }
        } else {
            if (response && response.error)
                console.error(response.error);
        }
    });
};