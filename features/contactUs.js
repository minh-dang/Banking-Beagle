'use strict';
let sendButtonMessage = require('../helpers/sendButtonMessage');
let sendButtons = require('../helpers/sendButtons');
let sendTextMessage = require('../helpers/sendTextMessage');
const CONTACT = require('../resources/data/contact_details.json');

const ACTIONS = ['contactInfo', 'callUs'];

let trigger = function(actionName){
    return ACTIONS.indexOf(actionName) >= 0;
};

let action = function(recipientId, result) {
    switch (result.action) {
        case 'contactInfo':
            sendButtons(recipientId, "You can speak to us through one of the calling options below",
                [CONTACT.details.RETAIL_PHONE, CONTACT.details.BUSINESS_PHONE, CONTACT.details.INTERNATIONAL_PHONE]);
            sendButtons(recipientId, "Or find other contact information on our website",
                [CONTACT.details.WEBSITE]);
            break;
        case 'callUs':
            sendButtons(recipientId, "You can speak to us through one of the calling options below",
                [CONTACT.details.RETAIL_PHONE, CONTACT.details.BUSINESS_PHONE, CONTACT.details.INTERNATIONAL_PHONE]);
            break;
    }
};

module.exports = {
    trigger: trigger,
    action: action
};