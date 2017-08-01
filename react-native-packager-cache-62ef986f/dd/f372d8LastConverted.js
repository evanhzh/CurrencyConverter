Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/Ah_Hoehoe_xD/GitHub/ReactNative-Course/CurrencyConverter/app/components/Text/LastConverted.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var _moment = require('moment');

var _moment2 = babelHelpers.interopRequireDefault(_moment);

var _styles = require('./styles');

var _styles2 = babelHelpers.interopRequireDefault(_styles);

var LastConverted = function LastConverted(_ref) {
  var base = _ref.base,
      conversionRate = _ref.conversionRate,
      quoteSymbol = _ref.quoteSymbol,
      date = _ref.date;
  return _react2.default.createElement(
    _reactNative.Text,
    { style: _styles2.default.smallText, __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    },
    '1 ',
    base,
    ' = ',
    conversionRate,
    ' ',
    quoteSymbol,
    ' as of ',
    (0, _moment2.default)(date).format('MMMM D, YYYY')
  );
};

LastConverted.propTypes = {
  date: _propTypes2.default.object,
  base: _propTypes2.default.string,
  quoteSymbol: _propTypes2.default.string,
  conversionRate: _propTypes2.default.number
};

exports.default = LastConverted;