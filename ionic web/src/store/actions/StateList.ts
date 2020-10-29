export const GET_STATELIST_STARTED = "GET_STATELIST_STARTED";
export const GET_STATELIST_COMPLETED = "GET_STATELIST_COMPLETED";
export const GET_STATELIST_FAILED = "GET_STATELIST_FAILED";

export const getStatelList = () => {
  return {
    type: GET_STATELIST_STARTED
  };
};