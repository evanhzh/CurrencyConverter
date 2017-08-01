Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = babelHelpers.interopRequireDefault(_reduxLogger);

var _reducers = require('../reducers');

var _reducers2 = babelHelpers.interopRequireDefault(_reducers);

var middleware = [];
if (process.env.NODE_ENV === 'development') {
  middleware.push(_reduxLogger2.default);
}

var store = (0, _redux.createStore)(_reducers2.default, _redux.applyMiddleware.apply(undefined, middleware));

exports.default = store;