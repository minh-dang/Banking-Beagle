'use strict';
let sendButtonMessage = require('../helpers/sendButtonMessage');
let sendVideoMessage = require('../helpers/sendVideoMessage');

let trigger = function(actionName){
    return actionName === "aboutUs";
};

let action = function(recipientId, result){
    var data = {
        text: 'Watch this quick video to learn more about our brand and who we are, or visit our website',
        title: 'Visit our site',
        url: 'http://www.bankwest.com.au/about-us/welcome-to-bankwest/making-banking-easier',
        buttonType: 'web_url'
    }
    sendButtonMessage(recipientId, data);
    sendVideoMessage(recipientId, 'bankwestBrand.mp4');


};

module.exports = {
    trigger: trigger,
    action: action
};