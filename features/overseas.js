'use strict';
let callSendAPI = require('../helpers/callSendAPI');
let sendButtonMessage = require('../helpers/sendButtonMessage');
let sendTextMessage = require('../helpers/sendTextMessage');
let sendButtons = require('../helpers/sendButtons');

const ACTIONS = ['overseasTravelNotification', 'overseasCardNotWorking'];

let trigger = function(actionName){
    return ACTIONS.indexOf(actionName) >= 0;
};

let action = function(recipientId, result) {
    let buttonText = "Notify us of your travel! We can contact you if we spot any suspicious activity while you're away. You can do this via our form in Online Banking or the Bankwest App."
    let buttons = [
        {
            type: "web_url",
            url: "https://ibs.bankwest.com.au/CMWeb/CustomerService/TravelNotice/Container.aspx",
            title: "Online Banking"
        },
        {
            type: "web_url",
            url: "http://www.bankwest.com.au/personal/payments-services/ways-to-bank-with-us/mobile-banking#DBWAPP",
            title: "Bankwest App"    
        }
    ]

    switch (result.action) {                        
		case 'overseasTravelNotification':	        
            sendButtons(recipientId, buttonText, buttons);
            break;                                      
        case 'overseasCardNotWorking':
            sendTextMessage(recipientId, "Please make sure you are selecting the 'Credit' option, even for debit cards!.");         
            break;                                      
    }
};

let postbackTrigger = function(postbackName){
    return ACTIONS.indexOf(postbackName) >= 0;
};

let postbackAction = function(recipientId, postbackName){
    action(recipientId, {action: postbackName});
};

module.exports = {
    trigger: trigger,
    action: action,
    postbackTrigger: postbackTrigger,
    postbackAction: postbackAction
};