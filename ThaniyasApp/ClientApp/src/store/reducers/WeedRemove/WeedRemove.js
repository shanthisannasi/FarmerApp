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
var WeedRemove_1 = require("../../actions/WeedRemove");
var initialWeedRemoveData = {
    WeedItems: [],
    status: {
        statusCode: 300,
        statusDisplay: "",
        statusValue: true,
    },
    weedRemoveInput: {
        landDetailId: 0,
        partitionLandDetailId: 0,
        ID: 0,
        date: "",
        cost: "",
        noOfLabours: "",
        labourCost: "",
    },
    isFormSubmit: true,
};
var weedRemoveData = function (state, action) {
    if (state === void 0) { state = initialWeedRemoveData; }
    switch (action.type) {
        case WeedRemove_1.STORE_WEEDREMOVE_STARTED:
            return __assign(__assign({}, state), { isFormSubmit: true, weedRemoveInput: action.input });
        case WeedRemove_1.STORE_WEEDREMOVE_COMPLETED:
            return __assign(__assign({}, state), { isFormSubmit: false });
        case WeedRemove_1.STORE_WEEDREMOVE_FAILED:
            return __assign(__assign({}, state), { isFormSubmit: true });
        case WeedRemove_1.GET_WEEDREMOVE_STARTED:
            return __assign({}, state);
        case WeedRemove_1.GET_WEEDREMOVE_COMPLETED:
            return __assign(__assign({}, state), { WeedItems: action.payload });
        case WeedRemove_1.GET_WEEDREMOVE_FAILED:
            return __assign(__assign({}, state), { error: action.error });
        case WeedRemove_1.DELETE_WEEDREMOVE_STARTED:
            return __assign(__assign({}, state), { isFormSubmit: false, weedRemoveInput: action.input });
        case WeedRemove_1.DELETE_WEEDREMOVE_COMPLETED:
            var WeedRemoveList = state.WeedItems;
            if (action.input.id != 0) {
                var index = WeedRemoveList.findIndex(function (weedRemove) { return weedRemove.id === action.input.id; });
                WeedRemoveList.splice(index, 1);
            }
            ;
            return __assign(__assign({}, state), { isFormSubmit: true, 
                // status: action.payload,
                weedRemoveInput: action.input, WeedRemoveList: WeedRemoveList });
        case WeedRemove_1.DELETE_WEEDREMOVE_FAILED:
            return __assign(__assign({}, state), { error: action.error });
        case WeedRemove_1.GET_WEEDREMOVEBYID_STARTED:
            return __assign(__assign({}, state), { weedRemoveInput: action.payload });
        case WeedRemove_1.GET_WEEDREMOVEBYID_COMPLETED:
            return __assign(__assign({}, state), { WeedItems: action.payload });
        case WeedRemove_1.GET_WEEDREMOVEBYID_FAILED:
            return __assign(__assign({}, state), { error: action.error });
        default:
            return state;
    }
};
exports.default = weedRemoveData;
//# sourceMappingURL=WeedRemove.js.map