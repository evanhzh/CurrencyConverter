Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactNative = require('react-native');

var _reactNativeExtendedStylesheet = require('react-native-extended-stylesheet');

var _reactNativeExtendedStylesheet2 = babelHelpers.interopRequireDefault(_reactNativeExtendedStylesheet);

var imageWidth = _reactNative.Dimensions.get('window').width / 2;

exports.default = _reactNativeExtendedStylesheet2.default.create({
  $largeContainerSize: imageWidth,
  $largeImageSize: imageWidth / 2,
  $smallContainerSize: imageWidth / 2,
  $smallImageSize: imageWidth / 4,

  container: {
    alignItems: 'center'
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '$largeContainerSize',
    height: '$largeContainerSize'
  },
  logo: {
    width: '$largeImageSize'
  },
  text: {
    fontWeight: '600',
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 30,
    marginBottom: 30,
    color: '$white'
  }
});