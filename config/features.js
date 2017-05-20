'use strict';
const Feature = require('../classes/Feature');
//name, code, enabled, messageTrigger, messageResponse, postbackTrigger, postbackResponse

let forex = require('../features/forex');
let atm = require('../features/nearestAtm');
let custProds = require('../features/customerProducts');
let openingHours = require('../features/openingHours');
let currency = require('../features/convertCurrency');
let interest = require('../features/interest');
let contact = require('../features/contactUs');
let faq = require('../features/faq');
let overseas = require('../features/overseas');
let greeting = require('../features/greeting');
let answerNotFound = require('../features/answerNotFound');
let bark = require('../features/bark');
let aboutUs = require('../features/aboutUs');
let getHelp = require('../features/getHelp');
let receiveCompliment = require('../features/receiveCompliment');
let smalltalk = require('../features/smalltalk');
let emoji = require('../features/emoji');
let minhtest = require('../features/minhtest');


// Array will be iterated over from start to finish. Only the first triggered
// feature will occur.
module.exports = [
    new Feature("Opening Hours", "OPHOURS", true, openingHours.trigger, openingHours.action, null, null),
    new Feature("About Us", "ABOUT", true, aboutUs.trigger, aboutUs.action, null, null),
    new Feature("Currency Exchange", "CUR", true, currency.trigger, currency.action, null, null),
    new Feature("Customer Products", "CUSTPRODS", true, custProds.trigger, custProds.action, null, null),
    new Feature("Contact Us", "CONTACT", true, contact.trigger, contact.action, null, null),
  	new Feature("Customer Products", "CUSTPRODS", true, custProds.trigger, custProds.action, null, null),
    new Feature("Nearest ATM Response", "ATM", true, atm.trigger, atm.action, null, null),
    new Feature("Foreign Exchange","FOREX", true, forex.trigger, forex.action, null, null),
    new Feature("Interest Rate", "INTEREST", true, interest.trigger, interest.action, null, null),
    new Feature("FAQ", "FAQ", true, faq.trigger, faq.action, faq.postbackTrigger, faq.postbackAction),
    new Feature("Overseas", "OVERSEAS", true, overseas.trigger, overseas.action, overseas.postbackTrigger, overseas.postbackAction),
    new Feature("Greeting", "GREETING", true, greeting.trigger, greeting.action, null, null),
    new Feature("Bark", "BARK", true, bark.trigger, bark.action, null, null),
    new Feature("Get Help", "HELP", true, getHelp.trigger, getHelp.action, null, null),
    new Feature("Receive Compliment", "COMPLIMENT", true, receiveCompliment.trigger, receiveCompliment.action, null, null),
    new Feature("Small Talk", "SMALLTALK", true, smalltalk.trigger, smalltalk.action, null, null),
    new Feature("Emoji", "EMOJI", true, emoji.trigger, emoji.action, null, null),
    new Feature("Minh Test", "MINH", true, minhtest.trigger, minhtest.action, null, null),
    // The NOTFOUND action will always trigger if nothing else will. New Features
    //   should be added above this
    new Feature("Answer not found","NOTFOUND", true, answerNotFound.trigger, answerNotFound.action, null, null)
];