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
var Harvestings_1 = require("../../actions/Harvestings");
var initialHarvestData = {
    isFormSubmit: true,
    HarvestItems: [],
    status: {
        statusCode: 300,
        statusDisplay: "",
        statusValue: true,
    },
    harvestInput: {
        landDetailId: 0,
        partitionLandDetailId: 0,
        ID: 0,
        date: "",
        cost: "",
        noOfLabours: "",
        labourCost: "",
    },
};
var harvestData = function (state, action) {
    if (state === void 0) { state = initialHarvestData; }
    switch (action.type) {
        case Harvestings_1.STORE_HARVESTINGS_STARTED:
            return __assign(__assign({}, state), { isFormSubmit: true, harvestInput: action.input });
        case Harvestings_1.STORE_HARVESTINGS_COMPLETED:
            var data = action.payload;
            return __assign(__assign({}, state), { isFormSubmit: false, harvestInput: action.input, HarvestItems: data });
        case Harvestings_1.STORE_HARVESTINGS_FAILED:
            return __assign(__assign({}, state), { isFormSubmit: true });
        case Harvestings_1.GET_HARVESTINGS_STARTED:
            return __assign({}, state);
        case Harvestings_1.GET_HARVESTINGS_COMPLETED:
            return __assign(__assign({}, state), { HarvestItems: action.payload });
        case Harvestings_1.GET_HARVESTINGS_FAILED:
            return __assign(__assign({}, state), { error: action.error });
        case Harvestings_1.DELETE_HARVESTINGS_STARTED:
            return __assign(__assign({}, state), { isFormSubmit: false, harvestInput: action.input });
        case Harvestings_1.DELETE_HARVESTINGS_COMPLETED:
            var HarvestList = state.HarvestItems;
            if (action.input.id != 0) {
                var index = HarvestList.findIndex(function (harvest) { return harvest.id === action.input.id; });
                HarvestList.splice(index, 1);
            }
            ;
            return __assign(__assign({}, state), { isFormSubmit: true, 
                // status: action.payload,
                harvestInput: action.input, HarvestList: HarvestList });
        case Harvestings_1.DELETE_HARVESTINGS_FAILED:
            return __assign(__assign({}, state), { error: action.error });
        case Harvestings_1.GET_HARVESTINGSBYID_STARTED:
            return __assign(__assign({}, state), { harvestInput: action.payload });
        case Harvestings_1.GET_HARVESTINGSBYID_COMPLETED:
            return __assign(__assign({}, state), { HarvestItems: action.payload });
        case Harvestings_1.GET_HARVESTINGSBYID_FAILED:
            return __assign(__assign({}, state), { error: action.error });
        default:
            return state;
    }
};
exports.default = harvestData;
//# sourceMappingURL=Harvestings.js.map