Object.defineProperty(exports, "__esModule", {
  value: true
});

var _themes = require('../actions/themes');

var initialState = {
  primaryColor: '#4F6D7A'
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _themes.CHANGE_PRIMARY_COLOR:
      return babelHelpers.extends({}, state, {
        primaryColor: action.color
      });
    default:
      return state;
  }
};