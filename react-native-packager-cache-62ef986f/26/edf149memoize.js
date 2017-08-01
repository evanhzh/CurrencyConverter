Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (fn) {
  return function m() {
    m.cache = m.cache || {};

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var key = args.join('|');
    m.cache[key] = key in m.cache ? m.cache[key] : fn.apply(undefined, args);
    return m.cache[key];
  };
};