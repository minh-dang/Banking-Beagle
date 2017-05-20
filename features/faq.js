'use strict';
let sendButtonMessage = require('../helpers/sendButtonMessage');
let sendTextMessage = require('../helpers/sendTextMessage');
let callSendAPI = require('../helpers/callSendAPI');
let overseas = require('./overseas');

const ACTIONS = ['faq', 'faqPan', 'faqSecureCode', 'faqSWIFT', 'faqPIN', 'faqLostStolen', 'faqActivateCard'];

let faqElements = [
    {
        title: "Overseas Tips",
        subtitle: "Get more help when you're in strife overseas.",
        buttons: [
            {
                type: "postback",
                title: "Bankwest's SWIFT Code",
                payload: "faqSWIFT"
            },
            {
                type: "postback",
                title: "Travel Notification",
                payload: "overseasTravelNotification"
            },
            {
                type: "postback",
                title: "Credit or Savings?",
                payload: "overseasCardNotWorking"
            }
        ]
    },
    {
        title: "General",
        subtitle: "A collection of commonly asked questions.",
        buttons: [
            {
                type: "postback",
                title: "I dont know my PAN",
                payload: "faqPan"
            },
            {
                type: "postback",
                title: "Secure Code",
                payload: "faqSecureCode"
            }
        ]
    },
    {
        title: "Cards",
        subtitle: "Help with handling your Bankwest card.",
        buttons: [
            {
                type: "postback",
                title: "Card Activation",
                payload: "faqActivateCard"
            },
            {
                type: "postback",
                title: "Reset my PIN",
                payload: "faqPIN"
            },
            {
                type: "postback",
                title: "Lost or Stolen",
                payload: "faqLostStolen"
            }
            ]
    }
];

let trigger = function(actionName){
    return ACTIONS.indexOf(actionName) >= 0;
};

let action = function(recipientId, result) {

    switch (result.action) {
        case 'faq':
            callSendAPI({
                recipient: {
                    id: recipientId
                },
                message: {
                    attachment: {
                        type: "template",
                        payload: {
                            template_type: "generic",
                            elements: faqElements
                        }
                    }
                }
            });
            break;
        case 'faqPan':
            sendTextMessage(recipientId, "Your PAN can be found on the letter or email we sent you after you opened your account, plus on your paper statements or eStatements and at the bottom of the settings menu in the Bankwest App.");
            sendTextMessage(recipientId, "If you can't locate your PAN, don't worry. Just call us on 1300 440 749 and we'll email these details to your inbox or send them in the mail.")
            sendTextMessage(recipientId, "If you pop in to your local Bankwest store we can issue your PAN on the spot.");
            break;
		case 'faqSecureCode':
	        sendTextMessage(recipientId, "If you're registered for SMS code you can quickly reset your secure code online. You'll find the link to the forgotten secure code tool on the online banking login page.");
	        sendTextMessage(recipientId, "Not registered for SMS Code? Call us on 1300 440 749 and we'll issue a temporary secure code on the spot.");
            break;
		case 'faqSWIFT':
	        sendTextMessage(recipientId, "Bankwest SWIFT code: BKWAAU6P");
            break;
    case 'faqActivateCard':
          sendButtonMessage(recipientId, {
              text: "Some simple steps to outline how to activate your card can be found on our forums",
              title: 'Check it out',
              url: 'https://forum.bankwest.com.au/t5/Cards/Activate-a-credit-or-debit-card/m-p/14#M2',
              buttonType: 'web_url'
          });
          break;
    case 'faqPIN':
          sendButtonMessage(recipientId, {
              text: "There's a handly message on our Bankwest Forum to help with resetting your PIN",
              title: 'Check it out',
              url: 'https://forum.bankwest.com.au/t5/Cards/How-do-I-change-my-PIN/m-p/679#M378',
              buttonType: 'web_url'
          });
          break;
    case 'faqLostStolen':
          sendButtonMessage(recipientId, {
              text: "Our Forums have some helpful information on what to do when your card is lost or stolen.",
              title: 'Check it out',
              url: 'https://forum.bankwest.com.au/t5/Cards/Lost-and-stolen-cards/m-p/11/thread-id/1#M91',
              buttonType: 'web_url'
          });
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



