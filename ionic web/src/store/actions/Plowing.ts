export const STORE_PLOWINGS_STARTED = "STORE_PLOWINGS_STARTED";
export const STORE_PLOWINGS_COMPLETED = "STORE_PLOWINGS_COMPLETED";
export const STORE_PLOWINGS_FAILED = "STORE_PLOWINGS_FAILED";

export const GET_PLOWINGS_STARTED = "GET_PLOWINGS_STARTED";
export const GET_PLOWINGS_COMPLETED = "GET_PLOWINGS_COMPLETED";
export const GET_PLOWINGS_FAILED = "GET_PLOWINGS_FAILED";

//export const SAVE_PARTITIONLAND_STARTED = "SAVE_PARTITIONLAND_STARTED";
//export const SAVE_PARTITIONLAND_COMPLETED = "SAVE_PARTITIONLAND_COMPLETED";
//export const SAVE_PARTITIONLAND_FAILED = "SAVE_PARTITIONLAND_FAILED";

export const DELETE_PLOWINGS_STARTED = "DELETE_PLOWINGS_STARTED";
export const DELETE_PLOWINGS_COMPLETED = "DELETE_PLOWINGS_COMPLETED";
export const DELETE_PLOWINGS_FAILED = "DELETE_PLOWINGS_FAILED";

export const GET_PLOWINGSBYID_STARTED = "GET_PLOWINGSBYID_STARTED";
export const GET_PLOWINGSBYID_COMPLETED = "GET_PLOWINGSBYID_COMPLETED";
export const GET_PLOWINGSBYID_FAILED = "GET_PLOWINGSBYID_FAILED";

export const storePlowingData = (plowingInput: any) => {
  return {
    type: STORE_PLOWINGS_STARTED,
    input: plowingInput
  };
};

export const getPlowingList = () => {
  return {
    type: GET_PLOWINGS_STARTED,
  };
};

export const getPlowingById = (id: any) => {
  return {
    type: GET_PLOWINGSBYID_STARTED,
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

export const deletePlowing = (id: any) => {
  return {
    type: DELETE_PLOWINGS_STARTED,
    id: id
  };
};