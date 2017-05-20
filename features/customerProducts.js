'use strict';

let callSendAPI = require('../helpers/callSendAPI');

const config = require('config');

const SERVER_URL = (process.env.SERVER_URL) ?
    (process.env.SERVER_URL) :
    config.get('serverURL');




let productElements = [
        {
            title: "Bankwest Home Loans",
            subtitle: "Realise your dream of owning your own home!",
            item_url: "http://www.bankwest.com.au/personal/home-loans/home-loans-overview/products",
            image_url: SERVER_URL + "/assets/house.jpg",
            buttons: [{
                type: "web_url",
                url: "http://www.bankwest.com.au/personal/home-loans/home-loans-overview/products",
                title: "See our home loans"
            }],
        }, 
        {
            title: "Bankwest Personal Loans",
            subtitle: "Go on a holiday or buy a car!",
            item_url: "http://www.bankwest.com.au/personal/personal-loans/personal-loans-overview?icid=bwnav301",
            image_url: SERVER_URL + "/assets/benjis.jpg",
            buttons: [{
                type: "web_url",
                url: "http://www.bankwest.com.au/personal/personal-loans/personal-loans-overview?icid=bwnav301",
                title: "See our personal loans"
            }]
        },

        {
            title: "Bankwest Business Loans",
            subtitle: "Grow your business!",
            item_url: "https://www.bankwest.com.au/business/products/products",
            image_url: SERVER_URL + "/assets/business.jpg",
            buttons: [{
                type: "web_url",
                url: "https://www.bankwest.com.au/business/products/products",
                title: "See our business products"
            }]
        }

];

let trigger = function(actionName){
    return actionName === "customerProducts";
};

let action = function(recipientId, messageText){
callSendAPI({
                recipient: {
                    id: recipientId
                },
                message: {
                    attachment: {
                        type: "template",
                        payload: {
                            template_type: "generic",
                            elements: productElements
                        }
                    }
                }
            });
};

module.exports = {
    trigger: trigger,
    action: action
};