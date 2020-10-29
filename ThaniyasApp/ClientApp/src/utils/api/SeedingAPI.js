"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Http_1 = require("../Http");
var Accounts_1 = require("../../store/selectors/Accounts");
var SeedingAPI = /** @class */ (function () {
    function SeedingAPI() {
    }
    SeedingAPI.addSeed = function (input) {
        Accounts_1.setUserForCRUD(input);
        var obj = JSON.stringify(input);
        var tObj = JSON.parse(obj);
        var url = '/api/Seed/add-Seed';
        if (input.id && input.id !== 0) {
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
    SeedingAPI.getSeedList = function () {
        return Http_1.Http.axios().get('/api/Seed/seed-list' + "?" + Accounts_1.getUserQueryString())
            .catch(function (e) {
            return e.response;
        });
    };
    SeedingAPI.getSeedByIdList = function (id) {
        return Http_1.Http.axios().get('/api/Seed/get-Seed/' + id)
            .catch(function (e) {
            return e.response;
        });
    };
    SeedingAPI.deleteSeed = function (id) {
        return Http_1.Http.axios().delete('/api/Seed/delete-Seed/' + id)
            .catch(function (e) {
            return e.response;
        });
    };
    return SeedingAPI;
}());
exports.SeedingAPI = SeedingAPI;
//# sourceMappingURL=SeedingAPI.js.map