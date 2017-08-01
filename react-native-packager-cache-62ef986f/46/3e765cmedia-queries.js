Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactNative = require('react-native');

var _cssMediaquery = require('css-mediaquery');

var _cssMediaquery2 = babelHelpers.interopRequireDefault(_cssMediaquery);

var _utils = require('../utils');

var _utils2 = babelHelpers.interopRequireDefault(_utils);

var PREFIX = '@media';

exports.default = {
  process: process
};

function isMediaQuery(str) {
  return typeof str === 'string' && str.indexOf(PREFIX) === 0;
}

function process(obj) {
  var mqKeys = [];

  var res = Object.keys(obj).reduce(function (res, key) {
    if (!isMediaQuery(key)) {
      res[key] = obj[key];
    } else {
      mqKeys.push(key);
    }
    return res;
  }, {});

  if (mqKeys.length) {
    var matchObject = getMatchObject();
    mqKeys.forEach(function (key) {
      var mqStr = key.replace(PREFIX, '');
      var isMatch = _cssMediaquery2.default.match(mqStr, matchObject);
      if (isMatch) {
        merge(res, obj[key]);
      }
    });
  }

  return res;
}

function getMatchObject() {
  var win = _reactNative.Dimensions.get('window');
  return {
    width: win.width,
    height: win.height,
    orientation: win.width > win.height ? 'landscape' : 'portrait',
    'aspect-ratio': win.width / win.height,
    type: _reactNative.Platform.OS
  };
}

function merge(obj, mqObj) {
  Object.keys(mqObj).forEach(function (key) {
    if (_utils2.default.isObject(obj[key]) && _utils2.default.isObject(mqObj[key])) {
      babelHelpers.extends(obj[key], mqObj[key]);
    } else {
      obj[key] = mqObj[key];
    }
  });
}