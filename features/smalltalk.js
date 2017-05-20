'use strict';
let sendTextMessage = require('../helpers/sendTextMessage');

let trigger = function(actionName){
  if (!actionName) return false;

  return actionName.includes('smalltalk')
};

let action = function(recipientId, resultObject) {
  if (resultObject.fulfillment.speech) {
    sendTextMessage(recipientId, resultObject.fulfillment.speech);
  }
};

module.exports = {
    trigger: trigger,
    action: action
};