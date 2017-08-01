Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactNative = require('react-native');

var _reactNavigation = require('react-navigation');

var _Home = require('../screens/Home');

var _Home2 = babelHelpers.interopRequireDefault(_Home);

var _Options = require('../screens/Options');

var _Options2 = babelHelpers.interopRequireDefault(_Options);

var _Themes = require('../screens/Themes');

var _Themes2 = babelHelpers.interopRequireDefault(_Themes);

var _CurrencyList = require('../screens/CurrencyList');

var _CurrencyList2 = babelHelpers.interopRequireDefault(_CurrencyList);

var HomeStack = (0, _reactNavigation.StackNavigator)({
  Home: {
    screen: _Home2.default,
    navigationOptions: {
      header: function header() {
        return null;
      }
    }
  },
  Options: {
    screen: _Options2.default,
    navigationOptions: function navigationOptions(_ref) {
      var navigation = _ref.navigation;
      return {
        headerTitle: navigation.state.params.title
      };
    }
  },
  Themes: {
    screen: _Themes2.default,
    navigationOptions: {
      headerTitle: 'Themes'
    }
  }
}, {
  headerMode: 'screen'
});

var CurrencyListStack = (0, _reactNavigation.StackNavigator)({
  CurrencyList: {
    screen: _CurrencyList2.default,
    navigationOptions: function navigationOptions(_ref2) {
      var navigation = _ref2.navigation;
      return {
        headerTitle: navigation.state.params.title
      };
    }
  }
});

exports.default = (0, _reactNavigation.StackNavigator)({
  Home: {
    screen: HomeStack
  },
  CurrencyList: {
    screen: CurrencyListStack
  }
}, {
  mode: 'modal',
  cardStyle: { paddingTop: _reactNative.StatusBar.currentHeight },
  headerMode: 'none'
});