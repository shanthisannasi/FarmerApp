"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Http_1 = require("../Http");
var Accounts_1 = require("../../store/selectors/Accounts");
var WeedRemoveAPI = /** @class */ (function () {
    function WeedRemoveAPI() {
    }
    WeedRemoveAPI.addWeedRemove = function (input) {
        Accounts_1.setUserForCRUD(input);
        var obj = JSON.stringify(input);
        var tObj = JSON.parse(obj);
        var url = '/api/WeedRemove/add-WeedRemove';
        if (input.id && input.id !== 0) {
            // url = '/api/Harvesting/add-Harvestings/' + input.id + "?";
            return Http_1.Http.axios().post(url, obj, {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "*",
                    "Access-Control-Allow-Headers": "*"
                }
            })
                .then(function (response) {
                return response;
            }).catch(function (e) {
                console.log("Error in post" + e);
                return e.response;
            });
        }
        else {
            return Http_1.Http.axios().post(url, tObj)
                .catch(function (e) {
                return e.response;
            });
        }
    };
    WeedRemoveAPI.getWeedRemoveList = function () {
        return Http_1.Http.axios().get('/api/WeedRemove/WeedRemove-list' + "?" + Accounts_1.getUserQueryString())
            .catch(function (e) {
            return e.response;
        });
    };
    WeedRemoveAPI.getWeedRemoveByIdList = function (id) {
        return Http_1.Http.axios().get('/api/WeedRemove/get-WeedRemove/' + id)
            .catch(function (e) {
            return e.response;
        });
    };
    WeedRemoveAPI.deleteWeedRemove = function (id) {
        return Http_1.Http.axios().delete('/api/WeedRemove/delete-WeedRemove/' + id)
            .catch(function (e) {
            return e.response;
        });
    };
    return WeedRemoveAPI;
}());
exports.WeedRemoveAPI = WeedRemoveAPI;
//# sourceMappingURL=WeedRemoveAPI.js.map