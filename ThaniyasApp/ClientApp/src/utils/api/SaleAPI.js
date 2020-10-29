"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Http_1 = require("../Http");
var Accounts_1 = require("../../store/selectors/Accounts");
var SaleAPI = /** @class */ (function () {
    function SaleAPI() {
    }
    SaleAPI.addSale = function (input) {
        Accounts_1.setUserForCRUD(input);
        var obj = JSON.stringify(input);
        var tObj = JSON.parse(obj);
        var url = '/api/Sale/add-Sale';
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
    SaleAPI.getSaleList = function () {
        return Http_1.Http.axios().get('/api/Sale/sale-list' + "?" + Accounts_1.getUserQueryString())
            .catch(function (e) {
            return e.response;
        });
    };
    SaleAPI.getSaleByIdList = function (id) {
        return Http_1.Http.axios().get('/api/Sale/get-Sale/' + id)
            .catch(function (e) {
            return e.response;
        });
    };
    SaleAPI.deleteSale = function (id) {
        return Http_1.Http.axios().delete('/api/Sale/delete-Sale/' + id)
            .catch(function (e) {
            return e.response;
        });
    };
    return SaleAPI;
}());
exports.SaleAPI = SaleAPI;
//# sourceMappingURL=SaleAPI.js.map