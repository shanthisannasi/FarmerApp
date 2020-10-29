export const STORE_WEEDREMOVE_STARTED = "STORE_WEEDREMOVE_STARTED";
export const STORE_WEEDREMOVE_COMPLETED = "STORE_WEEDREMOVE_COMPLETED";
export const STORE_WEEDREMOVE_FAILED = "STORE_WEEDREMOVE_FAILED";

export const GET_WEEDREMOVE_STARTED = "GET_WEEDREMOVE_STARTED";
export const GET_WEEDREMOVE_COMPLETED = "GET_WEEDREMOVE_COMPLETED";
export const GET_WEEDREMOVE_FAILED = "GET_WEEDREMOVE_FAILED";

//export const SAVE_PARTITIONLAND_STARTED = "SAVE_PARTITIONLAND_STARTED";
//export const SAVE_PARTITIONLAND_COMPLETED = "SAVE_PARTITIONLAND_COMPLETED";
//export const SAVE_PARTITIONLAND_FAILED = "SAVE_PARTITIONLAND_FAILED";

export const DELETE_WEEDREMOVE_STARTED = "DELETE_WEEDREMOVE_STARTED";
export const DELETE_WEEDREMOVE_COMPLETED = "DELETE_WEEDREMOVE_COMPLETED";
export const DELETE_WEEDREMOVE_FAILED = "DELETE_WEEDREMOVE_FAILED";

export const GET_WEEDREMOVEBYID_STARTED = "GET_WEEDREMOVEBYID_STARTED";
export const GET_WEEDREMOVEBYID_COMPLETED = "GET_WEEDREMOVEBYID_COMPLETED";
export const GET_WEEDREMOVEBYID_FAILED = "GET_WEEDREMOVEBYID_FAILED";

export const storeWeedRemoveData = (weedRemoveInput: any) => {
  return {
    type: STORE_WEEDREMOVE_STARTED,
    input: weedRemoveInput
  };
};

export const getWeedRemoveList = () => {
  return {
    type: GET_WEEDREMOVE_STARTED,
  };
};

export const getWeedRemoveById = (id: any) => {
  return {
    type: GET_WEEDREMOVEBYID_STARTED,
    id: id
  };
};

//export const savePartitionLand = (input: any) => {
//  return {
//    type: SAVE_PARTITIONLAND_STARTED,
//    //payload: status,
//    input: input
//  };
//};

export const deleteWeedRemove = (id: any) => {
  return {
    type: DELETE_WEEDREMOVE_STARTED,
    id: id
  };
};
