"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_devtools_extension_1 = require("redux-devtools-extension");
var redux_1 = require("redux");
var redux_saga_1 = require("redux-saga");
var index_1 = require("./reducers/index");
var index_2 = require("./sagas/index");
var sagaMiddleware = redux_saga_1.default();
var store = redux_1.createStore(index_1.default, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(index_2.default);
exports.default = store;
//# sourceMappingURL=index.js.map