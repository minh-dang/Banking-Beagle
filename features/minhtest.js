'use strict';
const https = require('https');
const request = require('request');
let sendTextMessage = require('../helpers/sendTextMessage');

const ACTIONS = ['minhtesting'];

let trigger = function(actionName){
    return ACTIONS.indexOf(actionName) >= 0;
};

let action = function(recipientId, result) {
    request({
        uri: `https://graph.facebook.com/v2.6/${recipientId}?access_token=EAAD2JSG4ZCZCABAIA3gisJrZAR1lo0Dh68kgapRzfd17AIU1vLwhfIHyLLyya8SXerZBanQ0IV62ggz7MryKsKUXHBpXOk41MihIwKPn15RZAXEQGOHDZCZBzSsbtv47OOCUjO2IZAtHSqTMEix7JsJAMzdtiHGCuywHpg6Ays4XOgZDZD`,
        method: 'GET'
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            sendTextMessage(recipientId, body);
        } else {
            if (response && response.error)
                console.error(response.error);
        }
    });
};

module.exports = {
    trigger: trigger,
    action: action
};