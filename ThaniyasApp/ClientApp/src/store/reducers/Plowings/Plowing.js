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
var Plowing_1 = require("../../actions/Plowing");
var initialPlowingData = {
    PlowingItems: [],
    status: {
        statusCode: 300,
        statusDisplay: "",
        statusValue: true,
    },
    plowingInput: {
        landDetailId: 0,
        partitionLandDetailId: 0,
        ID: 0,
        plowingDate: "",
        typeofPlowing: "",
        plowingExp: "",
    },
    isFormSubmit: true,
};
var plowingData = function (state, action) {
    if (state === void 0) { state = initialPlowingData; }
    switch (action.type) {
        case Plowing_1.STORE_PLOWINGS_STARTED:
            return __assign(__assign({}, state), { isFormSubmit: true, plowingInput: action.input });
        case Plowing_1.STORE_PLOWINGS_COMPLETED:
            return __assign(__assign({}, state), { isFormSubmit: false });
        case Plowing_1.STORE_PLOWINGS_FAILED:
            return __assign(__assign({}, state), { isFormSubmit: true });
        case Plowing_1.GET_PLOWINGS_STARTED:
            return __assign({}, state);
        case Plowing_1.GET_PLOWINGS_COMPLETED:
            return __assign(__assign({}, state), { PlowingItems: action.payload });
        case Plowing_1.GET_PLOWINGS_FAILED:
            return __assign(__assign({}, state), { error: action.error });
        case Plowing_1.DELETE_PLOWINGS_STARTED:
            return __assign(__assign({}, state), { isFormSubmit: false, plowingInput: action.input });
        case Plowing_1.DELETE_PLOWINGS_COMPLETED:
            var PlowingList = state.PlowingItems;
            if (action.input.id != 0) {
                var index = PlowingList.findIndex(function (plowing) { return plowing.id === action.input.id; });
                PlowingList.splice(index, 1);
            }
            ;
            return __assign(__assign({}, state), { isFormSubmit: true, 
                // status: action.payload,
                plowingInput: action.input, PlowingList: PlowingList });
        case Plowing_1.DELETE_PLOWINGS_FAILED:
            return __assign(__assign({}, state), { error: action.error });
        case Plowing_1.GET_PLOWINGSBYID_STARTED:
            return __assign(__assign({}, state), { plowingInput: action.payload });
        case Plowing_1.GET_PLOWINGSBYID_COMPLETED:
            return __assign(__assign({}, state), { PlowingItems: action.payload });
        case Plowing_1.GET_PLOWINGSBYID_FAILED:
            return __assign(__assign({}, state), { error: action.error });
        default:
            return state;
    }
};
exports.default = plowingData;
//# sourceMappingURL=Plowing.js.map