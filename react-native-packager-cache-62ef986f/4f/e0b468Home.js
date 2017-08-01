Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class,
    _temp2,
    _jsxFileName = '/Users/Ah_Hoehoe_xD/GitHub/ReactNative-Course/CurrencyConverter/app/screens/Home.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _Container = require('../components/Container');

var _Logo = require('../components/Logo');

var _TextInput = require('../components/TextInput');

var _Buttons = require('../components/Buttons');

var _Text = require('../components/Text');

var _Header = require('../components/Header');

var _currencies = require('../actions/currencies');

var Home = (_temp2 = _class = function (_Component) {
  babelHelpers.inherits(Home, _Component);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.handlePressBaseCurrency = function () {
      _this.props.navigation.navigate('CurrencyList', { title: 'Base Currency', type: 'base' });
    }, _this.handlePressQuoteCurrency = function () {
      _this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency', type: 'quote' });
    }, _this.handleChangeText = function (amount) {
      _this.props.dispatch((0, _currencies.changeCurrencyAmount)(amount));
    }, _this.handleSwapCurrency = function () {
      _this.props.dispatch((0, _currencies.swapCurrency)());
    }, _this.handleOptionsPress = function () {
      _this.props.navigation.navigate('Options', { title: 'Options' });
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(Home, [{
    key: 'render',
    value: function render() {
      var quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);

      if (this.props.isFetching) {
        quotePrice = '...';
      }

      return _react2.default.createElement(
        _Container.Container,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        },
        _react2.default.createElement(_reactNative.StatusBar, { translucent: false, barStyle: 'light-content', __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }),
        _react2.default.createElement(_Header.Header, { onPress: this.handleOptionsPress, __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }),
        _react2.default.createElement(
          _reactNative.KeyboardAvoidingView,
          { behavior: 'padding', __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            }
          },
          _react2.default.createElement(_Logo.Logo, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            }
          }),
          _react2.default.createElement(_TextInput.InputWithButton, {
            buttonText: this.props.baseCurrency,
            onPress: this.handlePressBaseCurrency,
            defaultValue: this.props.amount.toString(),
            keyboardType: 'numeric',
            onChangeText: this.handleChangeText,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          }),
          _react2.default.createElement(_TextInput.InputWithButton, {
            buttonText: this.props.quoteCurrency,
            onPress: this.handlePressQuoteCurrency,
            editable: false,
            value: quotePrice,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            }
          }),
          _react2.default.createElement(_Text.LastConverted, {
            base: this.props.baseCurrency,
            quoteSymbol: this.props.quoteCurrency,
            date: this.props.lastConvertedDate,
            conversionRate: this.props.conversionRate,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            }
          }),
          _react2.default.createElement(_Buttons.ClearButton, { onPress: this.handleSwapCurrency, text: 'Reverse Currencies', __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            }
          })
        )
      );
    }
  }]);
  return Home;
}(_react.Component), _class.propTypes = {
  navigation: _propTypes2.default.object,
  dispatch: _propTypes2.default.func,
  baseCurrency: _propTypes2.default.string,
  quoteCurrency: _propTypes2.default.string,
  amount: _propTypes2.default.number,
  conversionRate: _propTypes2.default.number,
  isFetching: _propTypes2.default.bool,
  lastConvertedDate: _propTypes2.default.object
}, _temp2);


var mapStateToProps = function mapStateToProps(state) {
  var baseCurrency = state.currencies.baseCurrency;
  var quoteCurrency = state.currencies.quoteCurrency;
  var conversionSelector = state.currencies.conversions[baseCurrency] || {};
  var rates = conversionSelector.rates || {};

  return {
    baseCurrency: baseCurrency,
    quoteCurrency: quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    isFetching: conversionSelector.isFetching,
    lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date()
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Home);