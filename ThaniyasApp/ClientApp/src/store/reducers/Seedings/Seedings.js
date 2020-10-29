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
var Seedings_1 = require("../../actions/Seedings");
var initialSeedData = {
    Seeditems: [],
    isFormSubmit: true,
    status: {
        statusCode: 300,
        statusDisplay: "",
        statusValue: true,
    },
    seedInput: {
        landDetailId: 0,
        partitionLandDetailId: 0,
        ID: 0,
        quantity: "",
        seedName: "",
        seedCost: "",
        noOfLabours: "",
        labourCost: "",
    },
};
var seedData = function (state, action) {
    if (state === void 0) { state = initialSeedData; }
    switch (action.type) {
        case Seedings_1.STORE_SEEDINGS_STARTED:
            return __assign(__assign({}, state), { isFormSubmit: true, seedInput: action.input });
        case Seedings_1.STORE_SEEDINGS_COMPLETED:
            return __assign(__assign({}, state), { isFormSubmit: false });
        case Seedings_1.STORE_SEEDINGS_FAILED:
            return __assign(__assign({}, state), { isFormSubmit: true });
        case Seedings_1.GET_SEEDING_STARTED:
            return __assign({}, state);
        case Seedings_1.GET_SEEDING_COMPLETED:
            return __assign(__assign({}, state), { Seeditems: action.payload });
        case Seedings_1.GET_SEEDING_FAILED:
            return __assign(__assign({}, state), { error: action.error });
        case Seedings_1.DELETE_SEEDING_STARTED:
            return __assign(__assign({}, state), { isFormSubmit: false, seedInput: action.input });
        case Seedings_1.DELETE_SEEDING_COMPLETED:
            var SeedList = state.Seeditems;
            if (action.input.id != 0) {
                var index = SeedList.findIndex(function (seed) { return seed.id === action.input.id; });
                SeedList.splice(index, 1);
            }
            ;
            return __assign(__assign({}, state), { isFormSubmit: true, 
                // status: action.payload,
                seedInput: action.input, SeedList: SeedList });
        case Seedings_1.DELETE_SEEDING_FAILED:
            return __assign(__assign({}, state), { error: action.error });
        case Seedings_1.GET_SEEDINGBYID_STARTED:
            return __assign(__assign({}, state), { seedInput: action.payload });
        case Seedings_1.GET_SEEDINGBYID_COMPLETED:
            return __assign(__assign({}, state), { Seeditems: action.payload });
        case Seedings_1.GET_SEEDINGBYID_FAILED:
            return __assign(__assign({}, state), { error: action.error });
        default:
            return state;
    }
};
exports.default = seedData;
//# sourceMappingURL=Seedings.js.map