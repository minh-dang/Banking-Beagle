'use strict';
let sendTextMessage = require('../helpers/sendTextMessage');
let jsonfile = require('jsonfile');
let ratesLocation = '../resources/data/forex_rates.json';
let forex_rates = {
    "timestamp": 1471437663000,
    "rates": {
        "USD" : { "name" : "United States", "sell_imt" : "0.7273", "sell_notes_cheques" : "0.7273", "buy_imt" : "0.7931", "buy_cheques" : "0.7951", "buy_notes" : "0.7968"},
        "GBP" : { "name" : "Great Britain", "sell_imt" : "0.5556", "sell_notes_cheques" : "0.5556", "buy_imt" : "0.6116", "buy_cheques" : "0.6149", "buy_notes" : "0.6168"},
        "BRL" : { "name" : "Brazil", "sell_imt" : "N/A", "sell_notes_cheques" : "2.1788", "buy_imt" : "N/A", "buy_cheques" : "N/A", "buy_notes" : "N/A"},
        "CAD" : { "name" : "Canada", "sell_imt" : "0.9326", "sell_notes_cheques" : "0.9326", "buy_imt" : "1.0215", "buy_cheques" : "1.0269", "buy_notes" : "1.0551"},
        "CNY" : { "name" : "China", "sell_imt" : "N/A", "sell_notes_cheques" : "4.7012", "buy_imt" : "N/A", "buy_cheques" : "N/A", "buy_notes" : "N/A"},
        "HRK" : { "name" : "Croatia", "sell_imt" : "N/A", "sell_notes_cheques" : "4.5808", "buy_imt" : "N/A", "buy_cheques" : "N/A", "buy_notes" : "N/A"},
        "CZK" : { "name" : "Czech Republic", "sell_imt" : "N/A", "sell_notes_cheques" : "16.4221", "buy_imt" : "N/A", "buy_cheques" : "N/A", "buy_notes" : "N/A"},
        "DKK" : { "name" : "Denmark", "sell_imt" : "4.7857", "sell_notes_cheques" : "4.7857", "buy_imt" : "5.2381", "buy_cheques" : "5.3427", "buy_notes" : "5.6754"},
        "EUR" : { "name" : "European Union", "sell_imt" : "0.6396", "sell_notes_cheques" : "0.6396", "buy_imt" : "0.7083", "buy_cheques" : "0.7139", "buy_notes" : "0.7228"},
        "FJD" : { "name" : "Fiji", "sell_imt" : "N/A", "sell_notes_cheques" : "1.4106", "buy_imt" : "N/A", "buy_cheques" : "N/A", "buy_notes" : "N/A"},
        "XPF" : { "name" : "French Polynesia", "sell_imt" : "N/A", "sell_notes_cheques" : "71.55", "buy_imt" : "N/A", "buy_cheques" : "N/A", "buy_notes" : "N/A"},
        "HKD" : { "name" : "Hong Kong", "sell_imt" : "5.5739", "sell_notes_cheques" : "5.5739", "buy_imt" : "6.1460", "buy_cheques" : "6.1680", "buy_notes" : "6.4321"},
        "INR" : { "name" : "India", "sell_imt" : "48.49", "sell_notes_cheques" : "48.49", "buy_imt" : "N/A", "buy_cheques" : "N/A", "buy_notes" : "N/A"},
        "IDR" : { "name" : "Indonesia", "sell_imt" : "N/A", "sell_notes_cheques" : "9226.4848", "buy_imt" : "N/A", "buy_cheques" : "N/A", "buy_notes" : "10850.9114"},
        "ILS" : { "name" : "Israel", "sell_imt" : "N/A", "sell_notes_cheques" : "2.5623", "buy_imt" : "N/A", "buy_cheques" : "N/A", "buy_notes" : "N/A"},
        "JPY" : { "name" : "Japan", "sell_imt" : "72.61", "sell_notes_cheques" : "72.61", "buy_imt" : "80.16", "buy_cheques" : "80.96", "buy_notes" : "84.14"},
        "KWD" : { "name" : "Kuwait", "sell_imt" : "N/A", "sell_notes_cheques" : "0.1901", "buy_imt" : "N/A", "buy_cheques" : "N/A", "buy_notes" : "N/A"},
        "MYR" : { "name" : "Malaysia", "sell_imt" : "N/A", "sell_notes_cheques" : "2.8933", "buy_imt" : "N/A", "buy_cheques" : "N/A", "buy_notes" : "N/A"},
        "NZD" : { "name" : "New Zealand", "sell_imt" : "1.0060", "sell_notes_cheques" : "1.0060", "buy_imt" : "1.0834", "buy_cheques" : "1.0951", "buy_notes" : "1.1408"},
        "NOK" : { "name" : "Norway", "sell_imt" : "5.9881", "sell_notes_cheques" : "5.9881", "buy_imt" : "6.5209", "buy_cheques" : "6.5788", "buy_notes" : "6.9679"},
        "OMR" : { "name" : "Oman", "sell_imt" : "N/A", "sell_notes_cheques" : "0.2622", "buy_imt" : "N/A", "buy_cheques" : "N/A", "buy_notes" : "N/A"},
        "PGK" : { "name" : "Papua New Guinea", "sell_imt" : "2.1404", "sell_notes_cheques" : "2.1404", "buy_imt" : "N/A", "buy_cheques" : "N/A", "buy_notes" : "N/A"},
        "PHP" : { "name" : "Philippines", "sell_imt" : "N/A", "sell_notes_cheques" : "29.942", "buy_imt" : "N/A", "buy_cheques" : "N/A", "buy_notes" : "N/A"},
        "PLN" : { "name" : "Poland", "sell_imt" : "N/A", "sell_notes_cheques" : "2.6062", "buy_imt" : "N/A", "buy_cheques" : "N/A", "buy_notes" : "N/A"},
        "SAR" : { "name" : "Saudi Arabia", "sell_imt" : "N/A", "sell_notes_cheques" : "2.4884", "buy_imt" : "N/A", "buy_cheques" : "N/A", "buy_notes" : "N/A"},
        "SGD" : { "name" : "Singapore", "sell_imt" : "0.9716", "sell_notes_cheques" : "0.9716", "buy_imt" : "1.0679", "buy_cheques" : "1.0836", "buy_notes" : "1.1530"},
        "SBD" : { "name" : "Solomon Islands", "sell_imt" : "N/A", "sell_notes_cheques" : "5.0186", "buy_imt" : "N/A", "buy_cheques" : "N/A", "buy_notes" : "N/A"},
        "ZAR" : { "name" : "South Africa", "sell_imt" : "9.6491", "sell_notes_cheques" : "9.6491", "buy_imt" : "10.7292", "buy_cheques" : "10.7487", "buy_notes" : "N/A"},
        "KRW" : { "name" : "South Korea", "sell_imt" : "N/A", "sell_notes_cheques" : "746.1898", "buy_imt" : "N/A", "buy_cheques" : "N/A", "buy_notes" : "N/A"},
        "LKR" : { "name" : "Sri Lanka", "sell_imt" : "N/A", "sell_notes_cheques" : "96.85", "buy_imt" : "N/A", "buy_cheques" : "N/A", "buy_notes" : "N/A"},
        "SEK" : { "name" : "Sweden", "sell_imt" : "6.0687", "sell_notes_cheques" : "6.0687", "buy_imt" : "6.6352", "buy_cheques" : "6.7337", "buy_notes" : "7.1297"},
        "CHF" : { "name" : "Switzerland", "sell_imt" : "0.6899", "sell_notes_cheques" : "0.6899", "buy_imt" : "0.7612", "buy_cheques" : "0.7707", "buy_notes" : "0.8069"},
        "TWD" : { "name" : "Taiwan", "sell_imt" : "N/A", "sell_notes_cheques" : "21.6139", "buy_imt" : "N/A", "buy_cheques" : "N/A", "buy_notes" : "N/A"},
        "THB" : { "name" : "Thailand", "sell_imt" : "24.56", "sell_notes_cheques" : "24.56", "buy_imt" : "N/A", "buy_cheques" : "N/A", "buy_notes" : "N/A"},
        "TRY" : { "name" : "Turkey", "sell_imt" : "N/A", "sell_notes_cheques" : "2.0542", "buy_imt" : "N/A", "buy_cheques" : "N/A", "buy_notes" : "N/A"},
        "AED" : { "name" : "United Arab Emirates", "sell_imt" : "N/A", "sell_notes_cheques" : "2.5010", "buy_imt" : "N/A", "buy_cheques" : "N/A", "buy_notes" : "N/A"},
        "VUV" : { "name" : "Vanuatu", "sell_imt" : "N/A", "sell_notes_cheques" : "70.31", "buy_imt" : "N/A", "buy_cheques" : "N/A", "buy_notes" : "N/A"},
        "VND" : { "name" : "Vietnam", "sell_imt" : "N/A", "sell_notes_cheques" : "15197.9424", "buy_imt" : "N/A", "buy_cheques" : "N/A", "buy_notes" : "N/A"}
    }
};

let trigger = function(recipientId, messageText){
    getLatestRates();
    let rates = forex_rates.rates;
    return messageMatchesRates(messageText, rates) !== null;
};

let action = function(recipientId, messageText){
    getLatestRates();
    let rates = forex_rates.rates;
    let matches = messageMatchesRates(messageText, rates);
    
    if (matches.length == 4) {
        sendTextMessage(recipientId, handleOneCurrencyExchange(matches[1].trim(), matches[2].toUpperCase()));
    } else if (matches.length == 6) {
        sendTextMessage(recipientId, handleTwoCurrencyExchange(matches[1].trim(), matches[2].toUpperCase(), matches[4].toUpperCase()));
    }    
};

function getLatestRates(){
    if (forex_rates.timestamp === undefined){
        console.log("Rates are empty, grabbing from file");
        //forex_rates = jsonfile.readFileSync(ratesLocation); 
    }    

    // Refresh if rates are more than 12h old
    if (new Date() - forex_rates.timestamp > 43200000){
        //forex_rates = get_updated_rates_somehow
        //jsonfile.writeFileSync(ratesLocation, forex_rates);
    }
}

function messageMatchesRates(message, rates){
    let acceptedCurrenciesRegex = `\\b(AUD|${Object.keys(rates).join("|")})\\b`;
    let exchangeTwoCurrencyRegex = new RegExp(`([0-9]+\.?[0-9]*)\\b.*(${acceptedCurrenciesRegex}).*(${acceptedCurrenciesRegex})`,"ig");
    let exchangeSingleCurrencyRegex = new RegExp(`([0-9]+\.?[0-9]*)\\b.*(${acceptedCurrenciesRegex})`,"ig");

    let result = exchangeTwoCurrencyRegex.exec(message);
    if (result !== null) { return result; }

    result = exchangeSingleCurrencyRegex.exec(message);
    if (result !== null) { return result; }

    return null;
}

function handleOneCurrencyExchange(value, currency){
    return `I think you want to exchange ${value} ${currency}`;
}

function handleTwoCurrencyExchange(value, currencyFrom, currencyTo){
    return `I think you want to exchange ${value} ${currencyFrom} to ${currencyTo}`;
}

module.exports = {
    trigger: trigger,
    action: action    
};

///([0-9]+.?[0-9]*).*(\s(AUD|USD|GBP|BRL|CAD|CNY|HRK|CZK|DKK|EUR|FJD|XPF|HKD|INR|IDR|ILS|JPY|KWD|MYR|NZD|NOK|OMR|PGK|PHP|PLN|SAR|SGD|SBD|ZAR|KRW|LKR|SEK|CHF|TWD|THB|TRY|AED|VUV|VND)s).*(\s(AUD|USD|GBP|BRL|CAD|CNY|HRK|CZK|DKK|EUR|FJD|XPF|HKD|INR|IDR|ILS|JPY|KWD|MYR|NZD|NOK|OMR|PGK|PHP|PLN|SAR|SGD|SBD|ZAR|KRW|LKR|SEK|CHF|TWD|THB|TRY|AED|VUV|VND)s)/gi