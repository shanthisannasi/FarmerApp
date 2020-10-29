"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Http_1 = require("../Http");
var Accounts_1 = require("../../store/selectors/Accounts");
var PArtitionLandAPI = /** @class */ (function () {
    function PArtitionLandAPI() {
    }
    PArtitionLandAPI.addPartitionLand = function (input) {
        Accounts_1.setUserForCRUD(input);
        var obj = JSON.stringify(input);
        var tObj = JSON.parse(obj);
        var url = '/api/PartitionLand/add-PartitionLand';
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
    PArtitionLandAPI.getPartitionLandList = function () {
        return Http_1.Http.axios().get('/api/PartitionLand/PartitionLand-list' + "?" + Accounts_1.getUserQueryString())
            .catch(function (e) {
            return e.response;
        });
    };
    PArtitionLandAPI.getPartitionLandByIdList = function (id) {
        return Http_1.Http.axios().get('/api/PartitionLand/get-PartitionLand/' + id)
            .catch(function (e) {
            return e.response;
        });
    };
    PArtitionLandAPI.deletePartitionLand = function (id) {
        return Http_1.Http.axios().delete('/api/PartitionLand/delete-PartLand/' + id)
            .catch(function (e) {
            return e.response;
        });
    };
    return PArtitionLandAPI;
}());
exports.PArtitionLandAPI = PArtitionLandAPI;
//# sourceMappingURL=PartitionLandAPI.js.map