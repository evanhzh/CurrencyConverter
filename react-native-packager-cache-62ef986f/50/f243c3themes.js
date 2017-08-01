Object.defineProperty(exports, "__esModule", {
  value: true
});
var CHANGE_PRIMARY_COLOR = exports.CHANGE_PRIMARY_COLOR = 'CHANGE_PRIMARY_COLOR';

var changePrimaryColor = exports.changePrimaryColor = function changePrimaryColor(color) {
  return {
    type: CHANGE_PRIMARY_COLOR,
    color: color
  };
};