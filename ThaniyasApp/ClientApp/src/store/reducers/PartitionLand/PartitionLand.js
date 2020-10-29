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
var PartitionLand_1 = require("../../actions/PartitionLand");
var initialPartitionLandData = {
    PLitems: [],
    PLitem: {},
    error: '',
    status: {
        statusCode: 300,
        statusDisplay: "",
        statusValue: true,
    },
    partitionLandInput: {
        landDirection: "",
        areaSize: "",
        landDetailId: 0,
        ID: 0
    },
    isLandId: true,
    isFormSubmit: true,
};
var PartitionLandData = function (state, action) {
    if (state === void 0) { state = initialPartitionLandData; }
    switch (action.type) {
        case PartitionLand_1.STORE_PARTITIONLAND_STARTED:
            return __assign(__assign({}, state), { isFormSubmit: true, partitionLandInput: action.input });
        case PartitionLand_1.STORE_PARTITIONLAND_COMPLETED:
            var data = action.payload;
            return __assign(__assign({}, state), { isFormSubmit: false, partitionLandInput: action.input, PLitem: data });
        case PartitionLand_1.STORE_PARTITIONLAND_FAILED:
            return __assign(__assign({}, state), { isFormSubmit: true });
        case PartitionLand_1.GET_PARTITIONLAND_STARTED:
            return __assign({}, state);
        case PartitionLand_1.GET_PARTITIONLAND_COMPLETED:
            return __assign(__assign({}, state), { PLitems: action.payload });
        case PartitionLand_1.GET_PARTITIONLAND_FAILED:
            return __assign(__assign({}, state), { error: action.error });
        case PartitionLand_1.DELETE_PARTITIONLAND_STARTED:
            return __assign(__assign({}, state), { isFormSubmit: false, partitionLandInput: action.input });
        case PartitionLand_1.DELETE_PARTITIONLAND_COMPLETED:
            var PartLandList = state.PLitems;
            if (action.input.id != 0) {
                var index = PartLandList.findIndex(function (PartLand) { return PartLand.id === action.input.id; });
                PartLandList.splice(index, 1);
            }
            ;
            return __assign(__assign({}, state), { isFormSubmit: true, 
                // status: action.payload,
                partitionLandInput: action.input, PartLandList: PartLandList });
        case PartitionLand_1.DELETE_PARTITIONLAND_FAILED:
            return __assign(__assign({}, state), { error: action.error });
        case PartitionLand_1.GET_PARTITIONLANDBYID_STARTED:
            return __assign(__assign({}, state), { partitionLandInput: action.payload, isLandId: true });
        case PartitionLand_1.GET_PARTITIONLANDBYID_COMPLETED:
            return __assign(__assign({}, state), { PLitem: action.payload, isLandId: false });
        case PartitionLand_1.GET_PARTITIONLANDBYID_FAILED:
            return __assign(__assign({}, state), { error: action.error, isLandId: true });
        default:
            return state;
    }
};
exports.default = PartitionLandData;
//# sourceMappingURL=PartitionLand.js.map