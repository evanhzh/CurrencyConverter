Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactNativeExtendedStylesheet = require('react-native-extended-stylesheet');

var _reactNativeExtendedStylesheet2 = babelHelpers.interopRequireDefault(_reactNativeExtendedStylesheet);

var styles = _reactNativeExtendedStylesheet2.default.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    '@media ios': {
      paddingTop: 20
    }
  },
  button: {
    alignSelf: 'flex-end',
    paddingVertical: 5,
    paddingHorizontal: 20
  },
  icon: {
    width: 18
  }
});

exports.default = styles;