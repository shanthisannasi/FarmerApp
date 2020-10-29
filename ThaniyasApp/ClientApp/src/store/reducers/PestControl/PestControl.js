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
var PestControl_1 = require("../../actions/PestControl");
var initialPestControlData = {
    PetsControlItems: [],
    status: {
        statusCode: 300,
        statusDisplay: "",
        statusValue: true,
    },
    pestControlInput: {
        landDetailId: 0,
        partitionLandDetailId: 0,
        ID: 0,
        pestControlDate: "",
        nameofthePestSide: "",
        cost: "",
        purpose: "",
        labourCost: "",
    },
    isFormSubmit: true,
    isLoading: true,
};
var pestControlData = function (state, action) {
    if (state === void 0) { state = initialPestControlData; }
    switch (action.type) {
        case PestControl_1.STORE_PESTCONTROL_STARTED:
            return __assign(__assign({}, state), { isFormSubmit: true, pestControlInput: action.input });
        case PestControl_1.STORE_PESTCONTROL_COMPLETED:
            return __assign(__assign({}, state), { isFormSubmit: false });
        case PestControl_1.STORE_PESTCONTROL_FAILED:
            return __assign(__assign({}, state), { isFormSubmit: true });
        case PestControl_1.GET_PESTCONTROL_STARTED:
            return __assign({}, state);
        case PestControl_1.GET_PESTCONTROL_COMPLETED:
            return __assign(__assign({}, state), { PetsControlItems: action.payload });
        case PestControl_1.GET_PESTCONTROL_FAILED:
            return __assign(__assign({}, state), { error: action.error });
        case PestControl_1.DELETE_PESTCONTROL_STARTED:
            return __assign(__assign({}, state), { isFormSubmit: true, pestControlInput: action.input });
        case PestControl_1.DELETE_PESTCONTROL_COMPLETED:
            var PestControlList = state.PetsControlItems;
            if (action.input.id != 0) {
                var index = PestControlList.findIndex(function (pestControl) { return pestControl.id === action.input.id; });
                PestControlList.splice(index, 1);
            }
            ;
            return __assign(__assign({}, state), { isFormSubmit: false, 
                // status: action.payload,
                pestControlInput: action.input, PestControlList: PestControlList });
        case PestControl_1.DELETE_PESTCONTROL_FAILED:
            return __assign(__assign({}, state), { isFormSubmit: true, error: action.error });
        case PestControl_1.GET_PESTCONTROLBYID_STARTED:
            return __assign(__assign({}, state), { pestControlInput: action.payload });
        case PestControl_1.GET_PESTCONTROLBYID_COMPLETED:
            return __assign(__assign({}, state), { PetsControlItems: action.payload });
        case PestControl_1.GET_PESTCONTROLBYID_FAILED:
            return __assign(__assign({}, state), { error: action.error });
        default:
            return state;
    }
};
exports.default = pestControlData;
//# sourceMappingURL=PestControl.js.map