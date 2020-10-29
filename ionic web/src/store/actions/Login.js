"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FETCH_LOGIN_STARTED = "FETCH_LOGIN_STARTED";
exports.FETCH_LOGIN_COMPLETED = "FETCH_LOGIN_COMPLETED";
exports.FETCH_LOGIN_FAILED = "FETCH_LOGIN_FAILED";
exports.FETCH_LOGOUT_STARTED = "FETCH_LOGOUT_STARTED";
exports.FETCH_LOGOUT_COMPLETED = "FETCH_LOGOUT_COMPLETED";
exports.FETCH_LOGOUT_FAILED = "FETCH_LOGOUT_FAILED";
exports.fetchLoginData = function (loginInput) {
    return {
        type: exports.FETCH_LOGIN_STARTED,
        //payload: status,
        input: loginInput
    };
};
exports.fetchLogout = function () {
    return {
        type: exports.FETCH_LOGOUT_STARTED,
    };
};
//# sourceMappingURL=Login.js.map