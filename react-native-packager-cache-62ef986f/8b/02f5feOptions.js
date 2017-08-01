Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class,
    _temp2,
    _jsxFileName = '/Users/Ah_Hoehoe_xD/GitHub/ReactNative-Course/CurrencyConverter/app/screens/Options.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _Alert = require('../components/Alert');

var _reactNative = require('react-native');

var _vectorIcons = require('@expo/vector-icons');

var _List = require('../components/List');

var ICON_PREFIX = _reactNative.Platform.OS === 'ios' ? 'ios' : 'md';
var ICON_COLOR = '#868686';
var ICON_SIZE = 23;
var TRANSFERWISE_URL = 'https://transferwise.com';

var Options = (_temp2 = _class = function (_Component) {
  babelHelpers.inherits(Options, _Component);

  function Options() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, Options);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = Options.__proto__ || Object.getPrototypeOf(Options)).call.apply(_ref, [this].concat(args))), _this), _this.handleThemesPress = function () {
      _this.props.navigation.navigate('Themes');
    }, _this.handleSitePress = function () {
      _reactNative.Linking.openURL(TRANSFERWISE_URL).catch(function () {
        return _this.props.alertWithType('error', 'Sorry!', 'Transferwise.com cannot be opened right now. Try again later.');
      });
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(Options, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNative.ScrollView,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        },
        _react2.default.createElement(_reactNative.StatusBar, { translucent: false, barStyle: 'default', __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }),
        _react2.default.createElement(_List.ListItem, {
          text: 'Themes',
          onPress: this.handleThemesPress,
          customIcon: _react2.default.createElement(_vectorIcons.Ionicons, { name: ICON_PREFIX + '-arrow-forward', color: ICON_COLOR, size: ICON_SIZE, __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            }
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }),
        _react2.default.createElement(_List.Separator, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        }),
        _react2.default.createElement(_List.ListItem, {
          text: 'Transferwise.com',
          onPress: this.handleSitePress,
          customIcon: _react2.default.createElement(_vectorIcons.Ionicons, { name: ICON_PREFIX + '-link', color: ICON_COLOR, size: ICON_SIZE, __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            }
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }),
        _react2.default.createElement(_List.Separator, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        })
      );
    }
  }]);
  return Options;
}(_react.Component), _class.propTypes = {
  navigation: _propTypes2.default.object,
  alertWithType: _propTypes2.default.func
}, _temp2);
exports.default = (0, _Alert.connectAlert)(Options);