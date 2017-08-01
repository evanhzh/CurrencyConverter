Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _reactNative = require('react-native');

var _style = require('./style');

var _style2 = babelHelpers.interopRequireDefault(_style);

var _utils = require('./utils');

var _utils2 = babelHelpers.interopRequireDefault(_utils);

var _vars = require('./replacers/vars');

var _vars2 = babelHelpers.interopRequireDefault(_vars);

var _mediaQueries = require('./replacers/media-queries');

var _mediaQueries2 = babelHelpers.interopRequireDefault(_mediaQueries);

var _default = function () {
  function _default(source) {
    babelHelpers.classCallCheck(this, _default);

    this.source = source;
    this.result = Object.create(null);
    this.nativeSheet = {};
    this.varsArr = [];
    this.extractedVars = null;
    this.processedSource = null;
  }

  babelHelpers.createClass(_default, [{
    key: 'calc',
    value: function calc(inVars) {
      this.processSource();
      this.calcVars(inVars);
      this.calcStyles();
      this.calcNative();
      return this.getResult();
    }
  }, {
    key: 'processSource',
    value: function processSource() {
      this.processedSource = _mediaQueries2.default.process(this.source);
    }
  }, {
    key: 'calcVars',
    value: function calcVars(inVars) {
      this.varsArr = inVars ? [inVars] : [];
      this.extractedVars = _vars2.default.extract(this.processedSource);
      if (this.extractedVars) {
        var varsArrForVars = [this.extractedVars].concat(this.varsArr);

        var _calc = new _style2.default(this.extractedVars, varsArrForVars).calc(),
            calculatedVars = _calc.calculatedVars;

        babelHelpers.extends(this.result, calculatedVars);
        this.varsArr = [calculatedVars].concat(this.varsArr);
      }
    }
  }, {
    key: 'calcStyles',
    value: function calcStyles() {
      var _this = this;

      var extractedStyles = _utils2.default.excludeKeys(this.processedSource, this.extractedVars);
      Object.keys(extractedStyles).forEach(function (key) {
        if (extractedStyles[key]) {
          _this.calcStyle(key, extractedStyles[key]);
        } else {
          _this.result[key] = extractedStyles[key];
        }
      });
    }
  }, {
    key: 'calcStyle',
    value: function calcStyle(key, styleProps) {
      var style = new _style2.default(styleProps, this.varsArr);

      var _style$calc = style.calc(),
          calculatedProps = _style$calc.calculatedProps,
          calculatedVars = _style$calc.calculatedVars;

      var merged = babelHelpers.extends({}, calculatedVars, calculatedProps);
      if (key.charAt(0) === '_') {
        this.result[key] = merged;
      } else {
        this.result['_' + key] = merged;
        this.nativeSheet[key] = calculatedProps;
      }
    }
  }, {
    key: 'calcNative',
    value: function calcNative() {
      if (Object.keys(this.nativeSheet).length) {
        var rnStyleSheet = _reactNative.StyleSheet.create(this.nativeSheet);
        babelHelpers.extends(this.result, rnStyleSheet);
      }
    }
  }, {
    key: 'getResult',
    value: function getResult() {
      return this.result;
    }
  }]);
  return _default;
}();

exports.default = _default;