Object.defineProperty(exports, "__esModule", {
  value: true
});
var SWAP_CURRENCY = exports.SWAP_CURRENCY = 'SWAP_CURRENCY';
var CHANGE_CURRENCY_AMOUNT = exports.CHANGE_CURRENCY_AMOUNT = 'CHANGE_CURRENCY_AMOUNT';
var CHANGE_BASE_CURRENCY = exports.CHANGE_BASE_CURRENCY = 'CHANGE_BASE_CURRENCY';
var CHANGE_QUOTE_CURRENCY = exports.CHANGE_QUOTE_CURRENCY = 'CHANGE_QUOTE_CURRENCY';

var swapCurrency = exports.swapCurrency = function swapCurrency() {
  return {
    type: SWAP_CURRENCY
  };
};

var changeCurrencyAmount = exports.changeCurrencyAmount = function changeCurrencyAmount(amount) {
  return {
    type: CHANGE_CURRENCY_AMOUNT,
    amount: parseFloat(amount)
  };
};

var changeBaseCurrency = exports.changeBaseCurrency = function changeBaseCurrency(currency) {
  return {
    type: CHANGE_BASE_CURRENCY,
    currency: currency
  };
};

var changeQuoteCurrency = exports.changeQuoteCurrency = function changeQuoteCurrency(currency) {
  return {
    type: CHANGE_QUOTE_CURRENCY,
    currency: currency
  };
};