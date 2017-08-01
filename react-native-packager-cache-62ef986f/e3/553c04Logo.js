Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/Ah_Hoehoe_xD/GitHub/ReactNative-Course/CurrencyConverter/app/components/Logo/Logo.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _styles = require('./styles');

var _styles2 = babelHelpers.interopRequireDefault(_styles);

var ANIMATION_DURATION = 250;

var Logo = function (_Component) {
  babelHelpers.inherits(Logo, _Component);

  function Logo(props) {
    babelHelpers.classCallCheck(this, Logo);

    var _this = babelHelpers.possibleConstructorReturn(this, (Logo.__proto__ || Object.getPrototypeOf(Logo)).call(this, props));

    _this.keyboardShow = function () {
      _reactNative.Animated.parallel([_reactNative.Animated.timing(_this.containerImageWidth, {
        toValue: _styles2.default.$smallContainerSize,
        duration: ANIMATION_DURATION
      }), _reactNative.Animated.timing(_this.imageWidth, {
        toValue: _styles2.default.$smallImageSize,
        duration: ANIMATION_DURATION
      })]).start();
    };

    _this.keyboardHide = function () {
      _reactNative.Animated.parallel([_reactNative.Animated.timing(_this.containerImageWidth, {
        toValue: _styles2.default.$largeContainerSize,
        duration: ANIMATION_DURATION
      }), _reactNative.Animated.timing(_this.imageWidth, {
        toValue: _styles2.default.$largeImageSize,
        duration: ANIMATION_DURATION
      })]).start();
    };

    _this.containerImageWidth = new _reactNative.Animated.Value(_styles2.default.$largeContainerSize);
    _this.imageWidth = new _reactNative.Animated.Value(_styles2.default.$largeImageSize);
    return _this;
  }

  babelHelpers.createClass(Logo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var showListener = 'keyboardWillShow';
      var hideListener = 'keyboardWillHide';

      if (_reactNative.Platform.OS === 'android') {
        showListener = 'keyboardDidShow';
        hideListener = 'keyboardDidHide';
      }

      this.keyboardShowListener = _reactNative.Keyboard.addListener(showListener, this.keyboardShow);
      this.keyboardHideListener = _reactNative.Keyboard.addListener(hideListener, this.keyboardHide);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.keyboardShowListener.remove();
      this.keyboardHideListener.remove();
    }
  }, {
    key: 'render',
    value: function render() {
      var containerImageStyle = [_styles2.default.containerImage, { width: this.containerImageWidth, height: this.containerImageWidth }];

      var imageStyle = [_styles2.default.logo, { width: this.imageWidth }];

      return _react2.default.createElement(
        _reactNative.View,
        { style: _styles2.default.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        },
        _react2.default.createElement(
          _reactNative.Animated.Image,
          {
            resizeMode: 'contain',
            style: containerImageStyle,
            source: require('./images/background.png'),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            }
          },
          _react2.default.createElement(_reactNative.Animated.Image, {
            resizeMode: 'contain',
            style: imageStyle,
            source: require('./images/logo.png'),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            }
          })
        ),
        _react2.default.createElement(
          _reactNative.Text,
          { style: _styles2.default.text, __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            }
          },
          'Currency Converter'
        )
      );
    }
  }]);
  return Logo;
}(_react.Component);

exports.default = Logo;