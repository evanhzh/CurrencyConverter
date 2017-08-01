Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _sheet = require('./sheet');

var _sheet2 = babelHelpers.interopRequireDefault(_sheet);

var _style = require('./style');

var _style2 = babelHelpers.interopRequireDefault(_style);

var _value = require('./value');

var _value2 = babelHelpers.interopRequireDefault(_value);

var _vars = require('./replacers/vars');

var _vars2 = babelHelpers.interopRequireDefault(_vars);

var _memoize = require('./memoize');

var _memoize2 = babelHelpers.interopRequireDefault(_memoize);

var _child = require('./child');

var _child2 = babelHelpers.interopRequireDefault(_child);

var BUILD_EVENT = 'build';

var _default = function () {
  function _default() {
    babelHelpers.classCallCheck(this, _default);
    this.memoize = _memoize2.default;
    this.child = _child2.default;

    this.builded = false;
    this.sheets = [];
    this.globalVars = null;
    this.listeners = {};
  }

  babelHelpers.createClass(_default, [{
    key: 'create',
    value: function create(obj) {
      var sheet = new _sheet2.default(obj);
      if (this.builded) {
        sheet.calc(this.globalVars);
      } else {
        this.sheets.push(sheet);
      }
      return sheet.getResult();
    }
  }, {
    key: 'build',
    value: function build(gVars) {
      this.builded = true;
      this._calcVars(gVars);
      this._calcSheets();
      this._callListeners(BUILD_EVENT);
    }
  }, {
    key: 'value',
    value: function value(expr, prop) {
      var varsArr = this.globalVars ? [this.globalVars] : [];
      return new _value2.default(expr, prop, varsArr).calc();
    }
  }, {
    key: 'subscribe',
    value: function subscribe(event, listener) {
      if (event !== BUILD_EVENT) {
        throw new Error('Only \'' + BUILD_EVENT + '\' event is currently supported.');
      }
      if (typeof listener !== 'function') {
        throw new Error('Listener should be a function.');
      }
      if (this.builded) {
        listener();
      } else {
        this.listeners[BUILD_EVENT] = this.listeners[BUILD_EVENT] || [];
        this.listeners[BUILD_EVENT].push(listener);
      }
    }
  }, {
    key: '_calcVars',
    value: function _calcVars(gVars) {
      if (gVars) {
        gVars = _vars2.default.addPrefix(gVars);
        this.globalVars = new _style2.default(gVars, [gVars]).calc().calculatedVars;
      }
    }
  }, {
    key: '_calcSheets',
    value: function _calcSheets() {
      var _this = this;

      this.sheets.forEach(function (sheet) {
        return sheet.calc(_this.globalVars);
      });
      this.sheets.length = 0;
    }
  }, {
    key: '_callListeners',
    value: function _callListeners(event) {
      if (Array.isArray(this.listeners[event])) {
        this.listeners[event].forEach(function (listener) {
          return listener();
        });
      }
    }
  }]);
  return _default;
}();

exports.default = _default;