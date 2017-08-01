Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/Ah_Hoehoe_xD/GitHub/ReactNative-Course/CurrencyConverter/app/components/Alert/connectAlert.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _hoistNonReactStatics = require('hoist-non-react-statics');

var _hoistNonReactStatics2 = babelHelpers.interopRequireDefault(_hoistNonReactStatics);

var connectAlert = function connectAlert(WrappedComponent) {
  var ConnectedAlert = function (_Component) {
    babelHelpers.inherits(ConnectedAlert, _Component);

    function ConnectedAlert() {
      babelHelpers.classCallCheck(this, ConnectedAlert);
      return babelHelpers.possibleConstructorReturn(this, (ConnectedAlert.__proto__ || Object.getPrototypeOf(ConnectedAlert)).apply(this, arguments));
    }

    babelHelpers.createClass(ConnectedAlert, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, babelHelpers.extends({}, this.props, {
          alertWithType: this.context.alertWithType,
          alert: this.context.alert,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        }));
      }
    }]);
    return ConnectedAlert;
  }(_react.Component);

  ConnectedAlert.contextTypes = {
    alertWithType: _react.PropTypes.func,
    alert: _react.PropTypes.func
  };

  return (0, _hoistNonReactStatics2.default)(ConnectedAlert, WrappedComponent);
};

exports.default = connectAlert;