export const STORE_PESTCONTROL_STARTED = "STORE_PESTCONTROL_STARTED";
export const STORE_PESTCONTROL_COMPLETED = "STORE_PESTCONTROL_COMPLETED";
export const STORE_PESTCONTROL_FAILED = "STORE_PESTCONTROL_FAILED";

export const GET_PESTCONTROL_STARTED = "GET_PESTCONTROL_STARTED";
export const GET_PESTCONTROL_COMPLETED = "GET_PESTCONTROL_COMPLETED";
export const GET_PESTCONTROL_FAILED = "GET_PESTCONTROL_FAILED";

//export const SAVE_PARTITIONLAND_STARTED = "SAVE_PARTITIONLAND_STARTED";
//export const SAVE_PARTITIONLAND_COMPLETED = "SAVE_PARTITIONLAND_COMPLETED";
//export const SAVE_PARTITIONLAND_FAILED = "SAVE_PARTITIONLAND_FAILED";

export const DELETE_PESTCONTROL_STARTED = "DELETE_PESTCONTROL_STARTED";
export const DELETE_PESTCONTROL_COMPLETED = "DELETE_PESTCONTROL_COMPLETED";
export const DELETE_PESTCONTROL_FAILED = "DELETE_PESTCONTROL_FAILED";

export const GET_PESTCONTROLBYID_STARTED = "GET_PESTCONTROLBYID_STARTED";
export const GET_PESTCONTROLBYID_COMPLETED = "GET_PESTCONTROLBYID_COMPLETED";
export const GET_PESTCONTROLBYID_FAILED = "GET_PESTCONTROLBYID_FAILED";

export const storePestControlData = (pestControlInput: any) => {
  return {
    type: STORE_PESTCONTROL_STARTED,
    input: pestControlInput
  };
};

export const getPestControlList = () => {
  return {
    type: GET_PESTCONTROL_STARTED,
  };
};

export const getPestControlById = (id: any) => {
  return {
    type: GET_PESTCONTROLBYID_STARTED,
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

export const deletePestControl = (id: any) => {
  return {
    type: DELETE_PESTCONTROL_STARTED,
    id: id
  };
};