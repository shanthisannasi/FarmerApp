export const STORE_LANDDETAIL_STARTED = "STORE_LANDDETAIL_STARTED";
export const STORE_LANDDETAIL_COMPLETED = "STORE_LANDDETAIL_COMPLETED";
export const STORE_LANDDETAIL_FAILED = "STORE_LANDDETAIL_FAILED";

export const GET_LANDDETAIL_STARTED = "GET_LANDDETAIL_STARTED";
export const GET_LANDDETAIL_COMPLETED = "GET_LANDDETAIL_COMPLETED";
export const GET_LANDDETAIL_FAILED = "GET_LANDDETAIL_FAILED";

export const DELETE_LANDDETAIL_STARTED = "DELETE_LANDDETAIL_STARTED";
export const DELETE_LANDDETAIL_COMPLETED = "DELETE_LANDDETAIL_COMPLETED";
export const DELETE_LANDDETAIL_FAILED = "DELETE_LANDDETAIL_FAILED";

export const GET_LANDDETAILBYID_STARTED = "GET_LANDDETAILBYID_STARTED";
export const GET_LANDDETAIBYID_COMPLETED = "GET_LANDDETAIBYID_COMPLETED";
export const GET_LANDDETAILBYID_FAILED = "GET_LANDDETAILBYID_FAILED";

export const storeLandDetailData = (landDetailInput: any) => {
  return {
    type: STORE_LANDDETAIL_STARTED,
    input: landDetailInput
  };
};

export const getLandDetailList = () => {
  return {
    type: GET_LANDDETAIL_STARTED
  };
};

export const getLandDetailById = (id: any) => {
  return {
    type: GET_LANDDETAILBYID_STARTED,
    id: id
  };
};

export const deleteLand = (id: any) => {
  return {
    type: DELETE_LANDDETAIL_STARTED,
    id: id
  };
};