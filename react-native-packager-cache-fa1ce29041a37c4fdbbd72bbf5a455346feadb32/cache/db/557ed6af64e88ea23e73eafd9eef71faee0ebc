Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class,
    _temp,
    _jsxFileName = '/Users/Ah_Hoehoe_xD/GitHub/ReactNative-Course/CurrencyConverter/app/components/Alert/AlertProvider.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeDropdownalert = require('react-native-dropdownalert');

var _reactNativeDropdownalert2 = babelHelpers.interopRequireDefault(_reactNativeDropdownalert);

var AlertProvider = (_temp = _class = function (_Component) {
  babelHelpers.inherits(AlertProvider, _Component);

  function AlertProvider() {
    babelHelpers.classCallCheck(this, AlertProvider);
    return babelHelpers.possibleConstructorReturn(this, (AlertProvider.__proto__ || Object.getPrototypeOf(AlertProvider)).apply(this, arguments));
  }

  babelHelpers.createClass(AlertProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _this2 = this;

      return {
        alert: function alert() {
          var _dropdown;

          return (_dropdown = _this2.dropdown).alert.apply(_dropdown, arguments);
        },
        alertWithType: function alertWithType() {
          var _dropdown2;

          return (_dropdown2 = _this2.dropdown).alertWithType.apply(_dropdown2, arguments);
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        _reactNative.View,
        { style: { flex: 1 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        },
        _react2.default.Children.only(this.props.children),
        _react2.default.createElement(_reactNativeDropdownalert2.default, {
          ref: function ref(_ref) {
            _this3.dropdown = _ref;
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        })
      );
    }
  }]);
  return AlertProvider;
}(_react.Component), _class.childContextTypes = {
  alertWithType: _react.PropTypes.func,
  alert: _react.PropTypes.func
}, _class.propTypes = {
  children: _react.PropTypes.any
}, _temp);
exports.default = AlertProvider;