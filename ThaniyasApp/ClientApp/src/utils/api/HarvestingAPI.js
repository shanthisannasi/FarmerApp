"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Http_1 = require("../Http");
var Accounts_1 = require("../../store/selectors/Accounts");
var HarvestingAPI = /** @class */ (function () {
    function HarvestingAPI() {
    }
    HarvestingAPI.addHarvesting = function (input) {
        Accounts_1.setUserForCRUD(input);
        var obj = JSON.stringify(input);
        var tObj = JSON.parse(obj);
        var url = '/api/Harvesting/add-Harvestings';
        var resultMethod = Http_1.Http.axios().post(url, obj, {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*",
                "Access-Control-Allow-Headers": "*"
            }
        })
            .then(function (res) {
            console.log("Response in post" + res);
            return res;
        }).catch(function (e) {
            console.log("Error in post" + e);
            return e.response;
        });
        return resultMethod;
    };
    HarvestingAPI.getHarvestList = function () {
        return Http_1.Http.axios().get('/api/Harvesting/harvesting-list' + "?" + Accounts_1.getUserQueryString())
            .catch(function (e) {
            return e.response;
        });
    };
    HarvestingAPI.getHarvestByIdList = function (id) {
        return Http_1.Http.axios().get('/api/Harvesting/get-Harvesting/' + id)
            .catch(function (e) {
            return e.response;
        });
    };
    HarvestingAPI.deleteHarvest = function (id) {
        return Http_1.Http.axios().delete('/api/Harvesting/delete-Harvest/' + id)
            .catch(function (e) {
            return e.response;
        });
    };
    return HarvestingAPI;
}());
exports.HarvestingAPI = HarvestingAPI;
//# sourceMappingURL=HarvestingAPI.js.map