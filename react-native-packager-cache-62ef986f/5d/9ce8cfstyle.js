Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _vars = require('./replacers/vars');

var _vars2 = babelHelpers.interopRequireDefault(_vars);

var _mediaQueries = require('./replacers/media-queries');

var _mediaQueries2 = babelHelpers.interopRequireDefault(_mediaQueries);

var _value = require('./value');

var _value2 = babelHelpers.interopRequireDefault(_value);

var _utils = require('./utils');

var _utils2 = babelHelpers.interopRequireDefault(_utils);

var _default = function () {
  function _default(source) {
    var varsArr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    babelHelpers.classCallCheck(this, _default);

    this.source = source;
    this.varsArr = varsArr;
    this.processedSource = null;
    this.extractedVars = null;
    this.extractedProps = null;
    this.calculatedVars = null;
    this.calculatedProps = null;
  }

  babelHelpers.createClass(_default, [{
    key: 'calc',
    value: function calc() {
      this.processSource();
      this.calcVars();
      this.calcProps();
      this.tryOutline();
      return {
        calculatedVars: this.calculatedVars,
        calculatedProps: this.calculatedProps
      };
    }
  }, {
    key: 'processSource',
    value: function processSource() {
      this.processedSource = _mediaQueries2.default.process(this.source);
    }
  }, {
    key: 'calcVars',
    value: function calcVars() {
      this.extractedVars = _vars2.default.extract(this.processedSource);
      if (this.extractedVars) {
        var varsArrForVars = [this.extractedVars].concat(this.varsArr);
        this.calculatedVars = calcPlainObject(this.extractedVars, varsArrForVars);
        this.varsArr = [this.calculatedVars].concat(this.varsArr);
      }
    }
  }, {
    key: 'calcProps',
    value: function calcProps() {
      this.extractedProps = _utils2.default.excludeKeys(this.processedSource, this.extractedVars);
      this.calculatedProps = calcPlainObject(this.extractedProps, this.varsArr);
    }
  }, {
    key: 'tryOutline',
    value: function tryOutline() {
      var outline = _vars2.default.get('$outline', this.varsArr);
      if (outline) {
        this.calculatedProps.borderWidth = typeof outline === 'number' ? outline : 1;
        this.calculatedProps.borderColor = getRandomColor();
      }
    }
  }]);
  return _default;
}();

exports.default = _default;

function calcPlainObject(obj, varsArr) {
  return Object.keys(obj).reduce(function (res, prop) {
    res[prop] = new _value2.default(obj[prop], prop, varsArr).calc();
    return res;
  }, {});
}

function getRandomColor() {
  var colors = ['black', 'red', 'green', 'blue'];
  var index = Math.round(Math.random() * (colors.length - 1));
  return colors[index];
}