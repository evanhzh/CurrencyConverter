
function noop() {}
function detectEval() {
  if (typeof chrome !== 'undefined' && chrome.app && chrome.app.runtime) {
    return false;
  }

  if (typeof navigator != 'undefined' && navigator.getDeviceStorage) {
    return false;
  }

  try {
    var f = new Function('', 'return true;');
    return f();
  } catch (ex) {
    return false;
  }
}

var hasEval = detectEval();

function isIndex(s) {
  return +s === s >>> 0 && s !== '';
}

function isObject(obj) {
  return obj === Object(obj);
}

var createObject = '__proto__' in {} ? function (obj) {
  return obj;
} : function (obj) {
  var proto = obj.__proto__;
  if (!proto) return obj;
  var newObject = Object.create(proto);
  Object.getOwnPropertyNames(obj).forEach(function (name) {
    Object.defineProperty(newObject, name, Object.getOwnPropertyDescriptor(obj, name));
  });
  return newObject;
};

function parsePath(path) {
  var keys = [];
  var index = -1;
  var c,
      newChar,
      key,
      type,
      transition,
      action,
      typeMap,
      mode = 'beforePath';

  var actions = {
    push: function push() {
      if (key === undefined) return;

      keys.push(key);
      key = undefined;
    },

    append: function append() {
      if (key === undefined) key = newChar;else key += newChar;
    }
  };

  function maybeUnescapeQuote() {
    if (index >= path.length) return;

    var nextChar = path[index + 1];
    if (mode == 'inSingleQuote' && nextChar == "'" || mode == 'inDoubleQuote' && nextChar == '"') {
      index++;
      newChar = nextChar;
      actions.append();
      return true;
    }
  }

  while (mode) {
    index++;
    c = path[index];

    if (c == '\\' && maybeUnescapeQuote(mode)) continue;

    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap['else'] || 'error';

    if (transition == 'error') return;

    mode = transition[0];
    action = actions[transition[1]] || noop;
    newChar = transition[2] === undefined ? c : transition[2];
    action();

    if (mode === 'afterPath') {
      return keys;
    }
  }

  return;
}

var identStart = '[\$_a-zA-Z]';
var identPart = '[\$_a-zA-Z0-9]';
var identRegExp = new RegExp('^' + identStart + '+' + identPart + '*' + '$');

function isIdent(s) {
  return identRegExp.test(s);
}

var constructorIsPrivate = {};

function Path(parts, privateToken) {
  if (privateToken !== constructorIsPrivate) throw Error('Use Path.get to retrieve path objects');

  for (var i = 0; i < parts.length; i++) {
    this.push(String(parts[i]));
  }

  if (hasEval && this.length) {
    this.getValueFrom = this.compiledGetValueFromFn();
  }
}

var pathCache = {};

function getPath(pathString) {
  if (pathString instanceof Path) return pathString;

  if (pathString == null || pathString.length == 0) pathString = '';

  if (typeof pathString != 'string') {
    if (isIndex(pathString.length)) {
      return new Path(pathString, constructorIsPrivate);
    }

    pathString = String(pathString);
  }

  var path = pathCache[pathString];
  if (path) return path;

  var parts = parsePath(pathString);
  if (!parts) return invalidPath;

  var path = new Path(parts, constructorIsPrivate);
  pathCache[pathString] = path;
  return path;
}

Path.get = getPath;

function formatAccessor(key) {
  if (isIndex(key)) {
    return '[' + key + ']';
  } else {
    return '["' + key.replace(/"/g, '\\"') + '"]';
  }
}

Path.prototype = createObject({
  __proto__: [],
  valid: true,

  toString: function toString() {
    var pathString = '';
    for (var i = 0; i < this.length; i++) {
      var key = this[i];
      if (isIdent(key)) {
        pathString += i ? '.' + key : key;
      } else {
        pathString += formatAccessor(key);
      }
    }

    return pathString;
  },

  getValueFrom: function getValueFrom(obj, directObserver) {
    for (var i = 0; i < this.length; i++) {
      if (obj == null) return;
      obj = obj[this[i]];
    }
    return obj;
  },

  iterateObjects: function iterateObjects(obj, observe) {
    for (var i = 0; i < this.length; i++) {
      if (i) obj = obj[this[i - 1]];
      if (!isObject(obj)) return;
      observe(obj, this[i]);
    }
  },

  compiledGetValueFromFn: function compiledGetValueFromFn() {
    var str = '';
    var pathString = 'obj';
    str += 'if (obj != null';
    var i = 0;
    var key;
    for (; i < this.length - 1; i++) {
      key = this[i];
      pathString += isIdent(key) ? '.' + key : formatAccessor(key);
      str += ' &&\n     ' + pathString + ' != null';
    }
    str += ')\n';

    var key = this[i];
    pathString += isIdent(key) ? '.' + key : formatAccessor(key);

    str += '  return ' + pathString + ';\nelse\n  return undefined;';
    return new Function('obj', str);
  },

  setValueFrom: function setValueFrom(obj, value) {
    if (!this.length) return false;

    for (var i = 0; i < this.length - 1; i++) {
      if (!isObject(obj)) return false;
      obj = obj[this[i]];
    }

    if (!isObject(obj)) return false;

    obj[this[i]] = value;
    return true;
  }
});

function getPathCharType(char) {
  if (char === undefined) return 'eof';

  var code = char.charCodeAt(0);

  switch (code) {
    case 0x5B:
    case 0x5D:
    case 0x2E:
    case 0x22:
    case 0x27:
    case 0x30:
      return char;

    case 0x5F:
    case 0x24:
      return 'ident';

    case 0x20:
    case 0x09:
    case 0x0A:
    case 0x0D:
    case 0xA0:
    case 0xFEFF:
    case 0x2028:
    case 0x2029:
      return 'ws';
  }

  if (0x61 <= code && code <= 0x7A || 0x41 <= code && code <= 0x5A) return 'ident';

  if (0x31 <= code && code <= 0x39) return 'number';

  return 'else';
}

var pathStateMachine = {
  'beforePath': {
    'ws': ['beforePath'],
    'ident': ['inIdent', 'append'],
    '[': ['beforeElement'],
    'eof': ['afterPath']
  },

  'inPath': {
    'ws': ['inPath'],
    '.': ['beforeIdent'],
    '[': ['beforeElement'],
    'eof': ['afterPath']
  },

  'beforeIdent': {
    'ws': ['beforeIdent'],
    'ident': ['inIdent', 'append']
  },

  'inIdent': {
    'ident': ['inIdent', 'append'],
    '0': ['inIdent', 'append'],
    'number': ['inIdent', 'append'],
    'ws': ['inPath', 'push'],
    '.': ['beforeIdent', 'push'],
    '[': ['beforeElement', 'push'],
    'eof': ['afterPath', 'push']
  },

  'beforeElement': {
    'ws': ['beforeElement'],
    '0': ['afterZero', 'append'],
    'number': ['inIndex', 'append'],
    "'": ['inSingleQuote', 'append', ''],
    '"': ['inDoubleQuote', 'append', '']
  },

  'afterZero': {
    'ws': ['afterElement', 'push'],
    ']': ['inPath', 'push']
  },

  'inIndex': {
    '0': ['inIndex', 'append'],
    'number': ['inIndex', 'append'],
    'ws': ['afterElement'],
    ']': ['inPath', 'push']
  },

  'inSingleQuote': {
    "'": ['afterElement'],
    'eof': ['error'],
    'else': ['inSingleQuote', 'append']
  },

  'inDoubleQuote': {
    '"': ['afterElement'],
    'eof': ['error'],
    'else': ['inDoubleQuote', 'append']
  },

  'afterElement': {
    'ws': ['afterElement'],
    ']': ['inPath', 'push']
  }
};

var invalidPath = new Path('', constructorIsPrivate);
invalidPath.valid = false;
invalidPath.getValueFrom = invalidPath.setValueFrom = function () {};

module.exports = Path;