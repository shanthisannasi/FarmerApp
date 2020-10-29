"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STORE_PARTITIONLAND_STARTED = "STORE_PARTITIONLAND_STARTED";
exports.STORE_PARTITIONLAND_COMPLETED = "STORE_PARTITIONLAND_COMPLETED";
exports.STORE_PARTITIONLAND_FAILED = "STORE_PARTITIONLAND_FAILED";
exports.GET_PARTITIONLAND_STARTED = "GET_PARTITIONLAND_STARTED";
exports.GET_PARTITIONLAND_COMPLETED = "GET_PARTITIONLAND_COMPLETED";
exports.GET_PARTITIONLAND_FAILED = "GET_PARTITIONLAND_FAILED";
exports.DELETE_PARTITIONLAND_STARTED = "DELETE_PARTITIONLAND_STARTED";
exports.DELETE_PARTITIONLAND_COMPLETED = "DELETE_PARTITIONLAND_COMPLETED";
exports.DELETE_PARTITIONLAND_FAILED = "DELETE_PARTITIONLAND_FAILED";
exports.GET_PARTITIONLANDBYID_STARTED = "GET_PARTITIONLANDBYID_STARTED";
exports.GET_PARTITIONLANDBYID_COMPLETED = "GET_PARTITIONLANDBYID_COMPLETED";
exports.GET_PARTITIONLANDBYID_FAILED = "GET_PARTITIONLANDBYID_FAILED";
exports.storePartitionLandData = function (partitionLandInput) {
    return {
        type: exports.STORE_PARTITIONLAND_STARTED,
        input: partitionLandInput
    };
};
exports.getPartitionLandList = function () {
    return {
        type: exports.GET_PARTITIONLAND_STARTED
    };
};
exports.getPartitionLandById = function (id) {
    return {
        type: exports.GET_PARTITIONLANDBYID_STARTED,
        id: id
    };
};
exports.deletePartitionLand = function (id) {
    return {
        type: exports.DELETE_PARTITIONLAND_STARTED,
        //payload: status,
        id: id
    };
};
//# sourceMappingURL=PartitionLand.js.map