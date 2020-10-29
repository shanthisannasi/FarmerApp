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
var Sales_1 = require("../../actions/Sales");
var initialSaleData = {
    SaleItems: [],
    status: {
        statusCode: 300,
        statusDisplay: "",
        statusValue: true,
    },
    saleInput: {
        landDetailId: 0,
        partitionLandDetailId: 0,
        ID: 0,
        saleDate: "",
        quantity: "",
        price: "",
        buyerName: "",
        buyerMobileNumber: "",
    },
    isFormSubmit: true,
};
var saleData = function (state, action) {
    if (state === void 0) { state = initialSaleData; }
    switch (action.type) {
        case Sales_1.STORE_SALES_STARTED:
            return __assign(__assign({}, state), { isFormSubmit: true, saleInput: action.input });
        case Sales_1.STORE_SALES_COMPLETED:
            return __assign(__assign({}, state), { isFormSubmit: false });
        case Sales_1.STORE_SALES_FAILED:
            return __assign(__assign({}, state), { isFormSubmit: true });
        case Sales_1.GET_SALES_STARTED:
            return __assign({}, state);
        case Sales_1.GET_SALES_COMPLETED:
            return __assign(__assign({}, state), { SaleItems: action.payload });
        case Sales_1.GET_SALES_FAILED:
            return __assign(__assign({}, state), { error: action.error });
        case Sales_1.DELETE_SALES_STARTED:
            return __assign(__assign({}, state), { isFormSubmit: false, saleInput: action.input });
        case Sales_1.DELETE_SALES_COMPLETED:
            var SaleList = state.SaleItems;
            if (action.input.id != 0) {
                var index = SaleList.findIndex(function (sale) { return sale.id === action.input.id; });
                SaleList.splice(index, 1);
            }
            ;
            return __assign(__assign({}, state), { isFormSubmit: true, 
                // status: action.payload,
                saleInput: action.input, SaleList: SaleList });
        case Sales_1.DELETE_SALES_FAILED:
            return __assign(__assign({}, state), { error: action.error });
        case Sales_1.GET_SALESBYID_STARTED:
            return __assign(__assign({}, state), { saleInput: action.payload });
        case Sales_1.GET_SALESBYID_COMPLETED:
            return __assign(__assign({}, state), { SaleItems: action.payload });
        case Sales_1.GET_SALESBYID_FAILED:
            return __assign(__assign({}, state), { error: action.error });
        default:
            return state;
    }
};
exports.default = saleData;
//# sourceMappingURL=Sales.js.map