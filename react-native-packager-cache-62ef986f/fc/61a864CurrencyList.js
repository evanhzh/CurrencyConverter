Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class,
    _temp2,
    _jsxFileName = '/Users/Ah_Hoehoe_xD/GitHub/ReactNative-Course/CurrencyConverter/app/screens/CurrencyList.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _reactNative = require('react-native');

var _List = require('../components/List');

var _currencies = require('../data/currencies');

var _currencies2 = babelHelpers.interopRequireDefault(_currencies);

var _currencies3 = require('../actions/currencies');

var _themes = require('../actions/themes');

var CurrencyList = (_temp2 = _class = function (_Component) {
  babelHelpers.inherits(CurrencyList, _Component);

  function CurrencyList() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, CurrencyList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = CurrencyList.__proto__ || Object.getPrototypeOf(CurrencyList)).call.apply(_ref, [this].concat(args))), _this), _this.handlePress = function (currency) {
      var type = _this.props.navigation.state.params.type;


      if (type === 'base') {
        _this.props.dispatch((0, _currencies3.changeBaseCurrency)(currency));
      } else if (type === 'quote') {
        _this.props.dispatch((0, _currencies3.changeQuoteCurrency)(currency));
      }
      _this.props.navigation.goBack(null);
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(CurrencyList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var comparisonCurrency = this.props.baseCurrency;

      if (this.props.navigation.state.params.type === 'quote') {
        comparisonCurrency = this.props.quoteCurrency;
      }

      return _react2.default.createElement(
        _reactNative.View,
        { style: { flex: 1 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        },
        _react2.default.createElement(_reactNative.StatusBar, { barStyle: 'default', translucent: false, __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }),
        _react2.default.createElement(_reactNative.FlatList, {
          data: _currencies2.default,
          renderItem: function renderItem(_ref2) {
            var item = _ref2.item;
            return _react2.default.createElement(_List.ListItem, {
              text: item,
              selected: item === comparisonCurrency,
              onPress: function onPress() {
                return _this2.handlePress(item);
              },
              iconBackground: _this2.props.primaryColor,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              }
            });
          },
          keyExtractor: function keyExtractor(item) {
            return item;
          },
          ItemSeparatorComponent: _List.Separator,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        })
      );
    }
  }]);
  return CurrencyList;
}(_react.Component), _class.propTypes = {
  navigation: _propTypes2.default.object,
  dispatch: _propTypes2.default.func,
  baseCurrency: _propTypes2.default.string,
  quoteCurrency: _propTypes2.default.string,
  primaryColor: _propTypes2.default.string
}, _temp2);


var mapStateToProps = function mapStateToProps(state) {
  return {
    baseCurrency: state.currencies.baseCurrency,
    quoteCurrency: state.currencies.quoteCurrency,
    primaryColor: state.theme.primaryColor
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(CurrencyList);