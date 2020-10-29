"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var effects_1 = require("redux-saga/effects");
var Registration_1 = require("../actions/Registration");
var Registration_2 = require("./Registration/Registration");
var Harvestings_1 = require("../actions/Harvestings");
var Harvsetings_1 = require("./Harvestings/Harvsetings");
var WeedRemove_1 = require("../actions/WeedRemove");
var WeedRemove_2 = require("./WeedRemove/WeedRemove");
var Seedings_1 = require("../actions/Seedings");
var Seedings_2 = require("./Seedings/Seedings");
var Sales_1 = require("../actions/Sales");
var Sales_2 = require("./Sales/Sales");
var Plowing_1 = require("../actions/Plowing");
var Plowing_2 = require("./Plowings/Plowing");
var PestControl_1 = require("../actions/PestControl");
var PestControl_2 = require("./PestControl/PestControl");
var PartitionLand_1 = require("../actions/PartitionLand");
var PartitionLand_2 = require("./PartitionLand/PartitionLand");
var LandDetail_1 = require("../actions/LandDetail");
var LandDetail_2 = require("./LandDetail/LandDetail");
var StateList_1 = require("../actions/StateList");
var StateList_2 = require("./StateList/StateList");
var Login_1 = require("../actions/Login");
var Login_2 = require("./Login/Login");
function rootSaga() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.all([
                    effects_1.takeLatest(Login_1.FETCH_LOGIN_STARTED, Login_2.fetchLoginData),
                    effects_1.takeLatest(Registration_1.STORE_REG_STARTED, Registration_2.storeRegData),
                    effects_1.takeLatest(Harvestings_1.STORE_HARVESTINGS_STARTED, Harvsetings_1.storeHarvestData),
                    effects_1.takeLatest(WeedRemove_1.STORE_WEEDREMOVE_STARTED, WeedRemove_2.storeWeedRemoveData),
                    effects_1.takeLatest(Seedings_1.STORE_SEEDINGS_STARTED, Seedings_2.storeSeedData),
                    effects_1.takeLatest(Sales_1.STORE_SALES_STARTED, Sales_2.storeSaleData),
                    effects_1.takeLatest(Plowing_1.STORE_PLOWINGS_STARTED, Plowing_2.storePlowingData),
                    effects_1.takeLatest(PestControl_1.STORE_PESTCONTROL_STARTED, PestControl_2.storePestControlData),
                    effects_1.takeLatest(PartitionLand_1.STORE_PARTITIONLAND_STARTED, PartitionLand_2.storePartitionLandData),
                    effects_1.takeLatest(LandDetail_1.STORE_LANDDETAIL_STARTED, LandDetail_2.storeLandDetailData),
                    effects_1.takeLatest(PartitionLand_1.GET_PARTITIONLAND_STARTED, PartitionLand_2.getPartitionLandList),
                    effects_1.takeLatest(LandDetail_1.GET_LANDDETAIL_STARTED, LandDetail_2.getLandDetailList),
                    effects_1.takeLatest(WeedRemove_1.GET_WEEDREMOVE_STARTED, WeedRemove_2.getWeedRemoveList),
                    effects_1.takeLatest(Harvestings_1.GET_HARVESTINGS_STARTED, Harvsetings_1.getHarvestList),
                    effects_1.takeLatest(Seedings_1.GET_SEEDING_STARTED, Seedings_2.getSeedList),
                    effects_1.takeLatest(Plowing_1.GET_PLOWINGS_STARTED, Plowing_2.getPlowingList),
                    effects_1.takeLatest(PestControl_1.GET_PESTCONTROL_STARTED, PestControl_2.getPestControlList),
                    effects_1.takeLatest(Sales_1.GET_SALES_STARTED, Sales_2.getSaleList),
                    effects_1.takeLatest(PartitionLand_1.DELETE_PARTITIONLAND_STARTED, PartitionLand_2.deletePartirionLand),
                    effects_1.takeLatest(LandDetail_1.DELETE_LANDDETAIL_STARTED, LandDetail_2.deleteLand),
                    effects_1.takeLatest(WeedRemove_1.DELETE_WEEDREMOVE_STARTED, WeedRemove_2.deleteWeedRemove),
                    effects_1.takeLatest(Harvestings_1.DELETE_HARVESTINGS_STARTED, Harvsetings_1.deleteHarvest),
                    effects_1.takeLatest(Seedings_1.DELETE_SEEDING_STARTED, Seedings_2.deleteSeed),
                    effects_1.takeLatest(PestControl_1.DELETE_PESTCONTROL_STARTED, PestControl_2.deletePestControl),
                    effects_1.takeLatest(Plowing_1.DELETE_PLOWINGS_STARTED, Plowing_2.deletePlowing),
                    effects_1.takeLatest(Sales_1.DELETE_SALES_STARTED, Sales_2.deleteSale),
                    effects_1.takeLatest(StateList_1.GET_STATELIST_STARTED, StateList_2.getStateList),
                    effects_1.takeLatest(PartitionLand_1.GET_PARTITIONLANDBYID_STARTED, PartitionLand_2.getPartitionLandByIdList),
                    effects_1.takeLatest(LandDetail_1.GET_LANDDETAILBYID_STARTED, LandDetail_2.getLandByIdList),
                    effects_1.takeLatest(WeedRemove_1.GET_WEEDREMOVEBYID_STARTED, WeedRemove_2.getWeedRemoveByIdList),
                    effects_1.takeLatest(Harvestings_1.GET_HARVESTINGSBYID_STARTED, Harvsetings_1.getHarvestByIdList),
                    effects_1.takeLatest(Seedings_1.GET_SEEDINGBYID_STARTED, Seedings_2.getSeedByIdList),
                    effects_1.takeLatest(PestControl_1.GET_PESTCONTROLBYID_STARTED, PestControl_2.getPestControlByIdList),
                    effects_1.takeLatest(Plowing_1.GET_PLOWINGSBYID_STARTED, Plowing_2.getPlowingByIdList),
                    effects_1.takeLatest(Sales_1.GET_SALESBYID_STARTED, Sales_2.getSaleByIdList),
                ])];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.default = rootSaga;
//# sourceMappingURL=index.js.map