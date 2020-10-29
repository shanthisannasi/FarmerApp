"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Login_1 = require("../../actions/Login");
var initialAccounts = {
    status: {
        statusCode: 300,
        statusDisplay: "",
        statusValue: true,
    },
    loginInput: {
        userName: "",
        password: "",
    },
    userDetail: {
        id: 0,
        userName: "",
        email: "",
        joinedDate: new Date(),
        isFirstTimeLogin: false,
        deleted: false
    },
    sessionTimeout: 10,
    // isLoading: true,
    isFormSubmit: false,
    // isLoggedIn: false,
    error: '',
};
var loginData = function (state, action) {
    if (state === void 0) { state = initialAccounts; }
    switch (action.type) {
        case Login_1.FETCH_LOGIN_STARTED:
            return __assign(__assign({}, state), { 
                //isLoading: true,
                isFormSubmit: false, loginInput: action.input });
        case Login_1.FETCH_LOGIN_COMPLETED:
            // console.log(event);
            return __assign(__assign({}, state), { isLoading: false, isFormSubmit: true, status: action.payload.status, loginInput: action.input, action: action.payload, sessionTimeout: action.sessionTimeout, userDetail: action.payload.userDetail });
        case Login_1.FETCH_LOGIN_FAILED:
            return __assign(__assign({}, state), { isLoading: true });
        case Login_1.FETCH_LOGOUT_STARTED:
            return __assign({}, state);
        case Login_1.FETCH_LOGOUT_COMPLETED:
            return __assign({}, state);
        case Login_1.FETCH_LOGOUT_FAILED:
            return __assign({}, state);
        default:
            return state;
    }
};
exports.default = loginData;
//# sourceMappingURL=Login.js.map