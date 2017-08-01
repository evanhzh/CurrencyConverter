Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/Ah_Hoehoe_xD/GitHub/ReactNative-Course/CurrencyConverter/app/components/List/ListItem.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var _styles = require('./styles');

var _styles2 = babelHelpers.interopRequireDefault(_styles);

var _Icon = require('./Icon');

var _Icon2 = babelHelpers.interopRequireDefault(_Icon);

var ListItem = function ListItem(_ref) {
  var text = _ref.text,
      onPress = _ref.onPress,
      _ref$selected = _ref.selected,
      selected = _ref$selected === undefined ? false : _ref$selected,
      _ref$checkmark = _ref.checkmark,
      checkmark = _ref$checkmark === undefined ? true : _ref$checkmark,
      _ref$visible = _ref.visible,
      visible = _ref$visible === undefined ? true : _ref$visible,
      _ref$customIcon = _ref.customIcon,
      customIcon = _ref$customIcon === undefined ? null : _ref$customIcon,
      iconBackground = _ref.iconBackground;
  return _react2.default.createElement(
    _reactNative.TouchableHighlight,
    { onPress: onPress, underlayColor: _styles2.default.$underlayColor, __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    },
    _react2.default.createElement(
      _reactNative.View,
      { style: _styles2.default.row, __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      },
      _react2.default.createElement(
        _reactNative.Text,
        { style: _styles2.default.text, __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        },
        text
      ),
      selected ? _react2.default.createElement(_Icon2.default, { checkmark: checkmark, visible: visible, iconBackground: iconBackground, __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }) : _react2.default.createElement(_Icon2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }),
      customIcon
    )
  );
};

ListItem.propTypes = {
  text: _propTypes2.default.string,
  onPress: _propTypes2.default.func,
  selected: _propTypes2.default.bool,
  checkmark: _propTypes2.default.bool,
  visible: _propTypes2.default.bool,
  customIcon: _propTypes2.default.element,
  iconBackground: _propTypes2.default.string
};

exports.default = ListItem;