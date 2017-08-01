Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectResolvePath = require('object-resolve-path');

var _objectResolvePath2 = babelHelpers.interopRequireDefault(_objectResolvePath);

var PREFIX = '$';

exports.default = {
  isVar: isVar,
  calc: calc,
  extract: extract,
  get: get,
  addPrefix: addPrefix
};

function isVar(str) {
  return typeof str === 'string' && str.charAt(0) === PREFIX;
}

function calc(str, varsArr) {
  var realValue = get(str, varsArr);
  if (realValue === undefined) {
    throw new Error('Unresolved variable: ' + str);
  }
  return realValue;
}

function extract(obj) {
  return Object.keys(obj).reduce(function (res, key) {
    if (isVar(key)) {
      res = res || {};
      res[key] = obj[key];
    }
    return res;
  }, null);
}

function get(name, varsArr) {
  if (!Array.isArray(varsArr)) {
    throw new Error('You should pass vars array to vars.get()');
  }

  var rootVar = name.match(/[^\.\[]*/)[0];
  var isSimpleVar = rootVar === name;

  for (var i = 0; i < varsArr.length; i++) {
    var vars = varsArr[i];
    if (!vars || vars[rootVar] === undefined) {
      continue;
    }
    if (isSimpleVar) {
      return vars[name];
    }
    try {
      return (0, _objectResolvePath2.default)(babelHelpers.defineProperty({}, rootVar, vars[rootVar]), name);
    } catch (error) {
      return undefined;
    }
  }
}

function addPrefix(obj) {
  return Object.keys(obj).reduce(function (res, key) {
    var resKey = key.charAt(0) !== PREFIX ? PREFIX + key : key;
    res[resKey] = obj[key];
    return res;
  }, {});
}