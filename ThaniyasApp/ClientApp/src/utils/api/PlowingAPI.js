"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Http_1 = require("../Http");
var Accounts_1 = require("../../store/selectors/Accounts");
var PlowingAPI = /** @class */ (function () {
    function PlowingAPI() {
    }
    PlowingAPI.addPlowing = function (input) {
        Accounts_1.setUserForCRUD(input);
        var obj = JSON.stringify(input);
        var tObj = JSON.parse(obj);
        var url = '/api/Plowing/add-Plowing';
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
    PlowingAPI.getPlowinglList = function () {
        return Http_1.Http.axios().get('/api/Plowing/plowing-list' + "?" + Accounts_1.getUserQueryString())
            .catch(function (e) {
            return e.response;
        });
    };
    PlowingAPI.getPlowinglByIdList = function (id) {
        return Http_1.Http.axios().get('/api/Plowing/get-Plowing/' + id)
            .catch(function (e) {
            return e.response;
        });
    };
    PlowingAPI.deletePlowing = function (id) {
        return Http_1.Http.axios().delete('/api/Plowing/delete-Plowing/' + id)
            .catch(function (e) {
            return e.response;
        });
    };
    return PlowingAPI;
}());
exports.PlowingAPI = PlowingAPI;
//# sourceMappingURL=PlowingAPI.js.map