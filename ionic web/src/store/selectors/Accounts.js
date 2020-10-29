"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentUser = function () {
    var loggedInString = localStorage.getItem('AUTHDATA');
    if (loggedInString) {
        var loggedInData = JSON.parse(loggedInString);
        return loggedInData;
    }
    else {
        return null;
    }
};
exports.getUserQueryString = function () {
    var userData = exports.getCurrentUser();
    if (userData) {
        var query = "userId=" + userData.userDetail.id;
        return query;
    }
    else {
        return "";
    }
};
exports.setUserForCRUD = function (obj) {
    var userData = exports.getCurrentUser();
    if (userData) {
        obj["UserId"] = userData.userDetail.id;
    }
};
//# sourceMappingURL=Accounts.js.map