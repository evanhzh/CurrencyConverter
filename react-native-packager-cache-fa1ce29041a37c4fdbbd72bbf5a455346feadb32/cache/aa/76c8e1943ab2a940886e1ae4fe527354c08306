Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/Ah_Hoehoe_xD/GitHub/ReactNative-Course/CurrencyConverter/app/components/List/Icon.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var _styles = require('./styles');

var _styles2 = babelHelpers.interopRequireDefault(_styles);

var Icon = function Icon(_ref) {
  var checkmark = _ref.checkmark,
      visible = _ref.visible,
      iconBackground = _ref.iconBackground;

  var iconStyles = [_styles2.default.icon];

  if (visible) {
    iconStyles.push(_styles2.default.iconVisible);
  }

  if (iconBackground) {
    iconStyles.push({ backgroundColor: iconBackground });
  }

  return _react2.default.createElement(
    _reactNative.View,
    { style: iconStyles, __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    },
    checkmark ? _react2.default.createElement(_reactNative.Image, {
      style: _styles2.default.checkIcon,
      resizeMode: 'contain',
      source: require('./images/check.png'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }) : null
  );
};

Icon.propTypes = {
  checkmark: _propTypes2.default.bool,
  visible: _propTypes2.default.bool,
  iconBackground: _propTypes2.default.string
};
exports.default = Icon;