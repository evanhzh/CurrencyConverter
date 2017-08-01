Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/Ah_Hoehoe_xD/GitHub/ReactNative-Course/CurrencyConverter/app/components/Container/Container.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var _styles = require('./styles');

var _styles2 = babelHelpers.interopRequireDefault(_styles);

var Container = function Container(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    _reactNative.View,
    { style: _styles2.default.container, __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    children
  );
};

Container.propTypes = {
  children: _propTypes2.default.any
};

exports.default = Container;