"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Http_1 = require("../Http");
var Accounts_1 = require("../../store/selectors/Accounts");
var LandDetailsAPI = /** @class */ (function () {
    function LandDetailsAPI() {
    }
    LandDetailsAPI.addLandDetails = function (input) {
        Accounts_1.setUserForCRUD(input);
        var obj = JSON.stringify(input);
        var tObj = JSON.parse(obj);
        var url = '/api/LandDetails/add-LandDetail';
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
    LandDetailsAPI.getLandDetailsList = function () {
        return Http_1.Http.axios().get('/api/LandDetails/get-LandDetails' + "?" + Accounts_1.getUserQueryString())
            .then(function (response) {
            console.log(response);
            return response;
        }).catch(function (e) {
            console.log("Error in post" + e);
            return e.response;
        });
    };
    LandDetailsAPI.getLandDetailByIdList = function (id) {
        return Http_1.Http.axios().get('/api/LandDetails/get-LandDetail/' + id)
            .catch(function (e) {
            return e.response;
        });
    };
    LandDetailsAPI.deleteLand = function (id) {
        return Http_1.Http.axios().delete('/api/LandDetails/delete-LandDetail/' + id)
            .catch(function (e) {
            return e.response;
        });
    };
    return LandDetailsAPI;
}());
exports.LandDetailsAPI = LandDetailsAPI;
//# sourceMappingURL=LandDetailsAPI.js.map