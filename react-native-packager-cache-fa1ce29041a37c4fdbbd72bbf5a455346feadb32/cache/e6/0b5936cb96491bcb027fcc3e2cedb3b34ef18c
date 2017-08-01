Object.defineProperty(exports, "__esModule", {
  value: true
});

var _currencies = require('../actions/currencies');

var initialState = {
  baseCurrency: 'USD',
  quoteCurrency: 'GBP',
  amount: 100,
  conversions: {
    USD: {
      isFetching: false,
      base: 'USD',
      date: '2017-05-31',
      rates: {
        AUD: 1.3416,
        BGN: 1.743,
        BRL: 3.2515,
        CAD: 1.3464,
        CHF: 0.97104,
        CNY: 6.813,
        CZK: 23.547,
        DKK: 6.6302,
        GBP: 0.77858,
        HKD: 7.7908,
        HRK: 6.6068,
        HUF: 273.77,
        IDR: 13308,
        ILS: 3.5431,
        INR: 64.463,
        JPY: 110.86,
        KRW: 1118.4,
        MXN: 18.765,
        MYR: 4.281,
        NOK: 8.4117,
        NZD: 1.4071,
        PHP: 49.77,
        PLN: 3.7173,
        RON: 4.0687,
        RUB: 56.774,
        SEK: 8.6942,
        SGD: 1.3829,
        THB: 34.07,
        TRY: 3.5366,
        ZAR: 13.133,
        EUR: 0.89119
      }
    }
  }
};

var setConversions = function setConversions(state, action) {
  var conversion = {
    isFetching: true,
    date: '',
    rates: {}
  };

  if (state.conversions[action.currency]) {
    conversion = state.conversions[action.currency];
  }

  return babelHelpers.extends({}, state.conversions, babelHelpers.defineProperty({}, action.currency, conversion));
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _currencies.CHANGE_CURRENCY_AMOUNT:
      return babelHelpers.extends({}, state, { amount: action.amount || 0 });
    case _currencies.SWAP_CURRENCY:
      return babelHelpers.extends({}, state, {
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency
      });
    case _currencies.CHANGE_BASE_CURRENCY:
      return babelHelpers.extends({}, state, {
        baseCurrency: action.currency,
        conversions: setConversions(state, action)
      });
    case _currencies.CHANGE_QUOTE_CURRENCY:
      return babelHelpers.extends({}, state, {
        quoteCurrency: action.currency,
        conversions: setConversions(state, action)
      });
    default:
      return state;
  }
};

exports.default = reducer;