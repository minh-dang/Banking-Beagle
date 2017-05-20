'use strict';
let sendTextMessage = require('../helpers/sendTextMessage');

const rates = {
  AUD: 1.0000,
  USD: 0.7171,
  GBP: 0.5436,
  BRL: 2.1628,
  CAD: 0.9339,
  CNY: 4.6562,
  HRK: 4.5277,
  CZK: 16.3091,
  DKK: 4.7606,
  EUR: 0.9360,
  FJD: 1.4144,
  XPF: 70.72,
  HKD: 5.5381,
  INR: 48.28,
  IDR: 9225.1799,
  ILS: 2.5158,
  JPY: 73.36,
  KWD: 0.1869,
  MYR: 2.8799,
  NZD: 0.9907,
  NOK: 5.9869,
  OMR: 0.2572,
  PGK: 2.1669,
  PHP: 29.781,
  PLN: 2.6363,
  SAR: 2.4424,
  SGD: 0.9721,
  SBD: 4.8485,
  ZAR: 10.2333,
  KRW: 734.2036,
  LKR: 95.52,
  SEK: 6.0669,
  CHF: 0.6951,
  TWD: 21.4600,
  THB: 24.35,
  TRY: 2.0329,
  AED: 2.4543,
  VUV: 70.29,
  VND: 15075.9424
}

let trigger = function(actionName) {
  return actionName === 'convertCurrency';
}

let action = function(recipientId, resultObject) {
    let amount = resultObject.parameters.amount;
    let from_currency = resultObject.parameters.from_currency;
    let to_currency = resultObject.parameters.to_currency;

    if (from_currency === '' && to_currency === '') {
      sendTextMessage(recipientId, "Sorry, I think you're trying to convert currency, but I'm not sure what currency you are converting from or to.");
      return;
    }
    else if (from_currency === '') {
      sendTextMessage(recipientId, "Sorry, I think you're trying to convert currency, but I'm not sure what currency you are converting from.");
      return;
    } else if (to_currency === '') {
      sendTextMessage(recipientId, "Sorry, I think you're trying to convert currency, but I'm not sure what currency you are converting from.");
      return;
    }

    if (!rates[from_currency]) {
      sendTextMessage(recipientId, `Sorry, I don't have rates for ${from_currency}`);
      return;
    }
    if (!rates[to_currency]) {
      sendTextMessage(recipientId, `Sorry, I don't have rates for ${to_currency}`);
      return;
    }

    let amount_in_aud = amount / rates[from_currency];
    let converted_amount = amount_in_aud * rates[to_currency];
    converted_amount = converted_amount.toFixed(4);

    sendTextMessage(recipientId, `I'll convert that for you... $${amount} ${from_currency} is $${converted_amount} in ${to_currency}.`);
}

module.exports = {
    trigger: trigger,
    action: action
};