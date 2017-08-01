Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class,
    _temp2,
    _jsxFileName = '/Users/Ah_Hoehoe_xD/GitHub/ReactNative-Course/CurrencyConverter/app/screens/Themes.js',
    _this3 = this;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _reactNative = require('react-native');

var _reactNativeExtendedStylesheet = require('react-native-extended-stylesheet');

var _reactNativeExtendedStylesheet2 = babelHelpers.interopRequireDefault(_reactNativeExtendedStylesheet);

var _Header = require('../components/Header');

var _List = require('../components/List');

var _themes = require('../actions/themes');

var styles = _reactNativeExtendedStylesheet2.default.create({
  $blue: '$primaryBlue',
  $green: '$primaryGreen',
  $orange: '$primaryOrange',
  $purple: '$primaryPurple'
});

var Themes = (_temp2 = _class = function (_Component) {
  babelHelpers.inherits(Themes, _Component);

  function Themes() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, Themes);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = Themes.__proto__ || Object.getPrototypeOf(Themes)).call.apply(_ref, [this].concat(args))), _this), _this.handleThemePress = function (color) {
      _this.props.dispatch((0, _themes.changePrimaryColor)(color));
      _this.props.navigation.goBack();
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(Themes, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactNative.ScrollView,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        },
        _react2.default.createElement(_reactNative.StatusBar, { translucent: false, barStyle: 'default', __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }),
        _react2.default.createElement(_Header.Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }),
        _react2.default.createElement(_List.ListItem, {
          text: 'Blue',
          onPress: function onPress() {
            return _this2.handleThemePress(styles.$blue);
          },
          selected: true,
          checkmark: false,
          iconBackground: styles.$blue,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        }),
        _react2.default.createElement(_List.Separator, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }),
        _react2.default.createElement(_List.ListItem, {
          text: 'Orange',
          onPress: function onPress() {
            return _this2.handleThemePress(styles.$orange);
          },
          selected: true,
          checkmark: false,
          iconBackground: styles.$orange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }),
        _react2.default.createElement(_List.Separator, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }),
        _react2.default.createElement(_List.ListItem, {
          text: 'Green',
          onPress: function onPress() {
            return _this2.handleThemePress(styles.$green);
          },
          selected: true,
          checkmark: false,
          iconBackground: styles.$green,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }),
        _react2.default.createElement(_List.Separator, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }),
        _react2.default.createElement(_List.ListItem, {
          text: 'Purple',
          onPress: function onPress() {
            return _this2.handleThemePress(styles.$purple);
          },
          selected: true,
          checkmark: false,
          iconBackground: styles.$purple,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }),
        _react2.default.createElement(_List.Separator, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        })
      );
    }
  }]);
  return Themes;
}(_react.Component), _class.propTypes = {
  navigation: _propTypes2.default.object,
  dispatch: _propTypes2.default.func
}, _temp2);


mapStateTopProps = function mapStateTopProps(state) {
  return {
    changePrimaryColor: _this3.props.color
  };
};

exports.default = (0, _reactRedux.connect)()(Themes);