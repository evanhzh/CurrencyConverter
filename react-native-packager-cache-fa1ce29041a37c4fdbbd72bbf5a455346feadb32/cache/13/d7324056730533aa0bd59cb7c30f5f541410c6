Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/Ah_Hoehoe_xD/GitHub/ReactNative-Course/CurrencyConverter/app/components/TextInput/InputWithButton.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var _color = require('color');

var _color2 = babelHelpers.interopRequireDefault(_color);

var _styles = require('./styles');

var _styles2 = babelHelpers.interopRequireDefault(_styles);

var InputWithButton = function InputWithButton(props) {
  var onPress = props.onPress,
      buttonText = props.buttonText,
      _props$editable = props.editable,
      editable = _props$editable === undefined ? true : _props$editable;


  var underlayColor = (0, _color2.default)(_styles2.default.$buttonBackgroundColorBase).darken(_styles2.default.$buttonBackgroundColorModifier);

  var containerStyles = [_styles2.default.container];
  if (editable === false) {
    containerStyles.push(_styles2.default.containerDisabled);
  }

  return _react2.default.createElement(
    _reactNative.View,
    { style: containerStyles, __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    },
    _react2.default.createElement(
      _reactNative.TouchableHighlight,
      {
        underlayColor: underlayColor,
        style: _styles2.default.buttonContainer,
        onPress: onPress,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      },
      _react2.default.createElement(
        _reactNative.Text,
        { style: _styles2.default.buttonText, __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        },
        buttonText
      )
    ),
    _react2.default.createElement(_reactNative.View, { style: _styles2.default.border, __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    }),
    _react2.default.createElement(_reactNative.TextInput, babelHelpers.extends({ style: _styles2.default.input, underlineColorAndroid: 'transparent' }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      }
    }))
  );
};

InputWithButton.propTypes = {
  onPress: _propTypes2.default.func,
  buttonText: _propTypes2.default.string,
  editable: _propTypes2.default.bool
};

exports.default = InputWithButton;