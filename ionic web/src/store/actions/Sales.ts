export const STORE_SALES_STARTED = "STORE_SALES_STARTED";
export const STORE_SALES_COMPLETED = "STORE_SALES_COMPLETED";
export const STORE_SALES_FAILED = "STORE_SALES_FAILED";

export const GET_SALES_STARTED = "GET_SALES_STARTED";
export const GET_SALES_COMPLETED = "GET_SALES_COMPLETED";
export const GET_SALES_FAILED = "GET_SALES_FAILED";

//export const SAVE_PARTITIONLAND_STARTED = "SAVE_PARTITIONLAND_STARTED";
//export const SAVE_PARTITIONLAND_COMPLETED = "SAVE_PARTITIONLAND_COMPLETED";
//export const SAVE_PARTITIONLAND_FAILED = "SAVE_PARTITIONLAND_FAILED";

export const DELETE_SALES_STARTED = "DELETE_SALES_STARTED";
export const DELETE_SALES_COMPLETED = "DELETE_SALES_COMPLETED";
export const DELETE_SALES_FAILED = "DELETE_SALES_FAILED";

export const GET_SALESBYID_STARTED = "GET_SALESBYID_STARTED";
export const GET_SALESBYID_COMPLETED = "GET_SALESBYID_COMPLETED";
export const GET_SALESBYID_FAILED = "GET_SALESBYID_FAILED";

export const storeSaleData = (salesInput: any) => {
  return {
    type: STORE_SALES_STARTED,
    input: salesInput
  };
};

export const getSaleList = () => {
  return {
    type: GET_SALES_STARTED,
  };
};

export const getSaleById = (id: any) => {
  return {
    type: GET_SALESBYID_STARTED,
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

export const deleteSale = (id: any) => {
  return {
    type: DELETE_SALES_STARTED,
    id: id
  };
};