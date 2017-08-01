Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/Ah_Hoehoe_xD/GitHub/ReactNative-Course/CurrencyConverter/app/components/Buttons/ClearButton.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var _styles = require('./styles');

var _styles2 = babelHelpers.interopRequireDefault(_styles);

var ClearButton = function ClearButton(_ref) {
  var text = _ref.text,
      onPress = _ref.onPress;
  return _react2.default.createElement(
    _reactNative.TouchableOpacity,
    { style: _styles2.default.container, onPress: onPress, __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    _react2.default.createElement(
      _reactNative.View,
      { style: _styles2.default.wrapper, __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      _react2.default.createElement(_reactNative.Image, { resizeMode: 'contain', style: _styles2.default.icon, source: require('./images/icon.png'), __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }),
      _react2.default.createElement(
        _reactNative.Text,
        { style: _styles2.default.text, __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        },
        text
      )
    )
  );
};

ClearButton.propTypes = {
  text: _propTypes2.default.string,
  onPress: _propTypes2.default.func
};

exports.default = ClearButton;