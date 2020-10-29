import {
  STORE_PLOWINGS_STARTED, STORE_PLOWINGS_COMPLETED, STORE_PLOWINGS_FAILED,
  GET_PLOWINGSBYID_STARTED, GET_PLOWINGSBYID_COMPLETED, GET_PLOWINGSBYID_FAILED,
  GET_PLOWINGS_FAILED, GET_PLOWINGS_COMPLETED, GET_PLOWINGS_STARTED,
  DELETE_PLOWINGS_STARTED, DELETE_PLOWINGS_COMPLETED, DELETE_PLOWINGS_FAILED
}
  from '../../actions/Plowing';

const initialPlowingData = {
  PlowingItems: [] as any,
  status: {
    statusCode: 300,
    statusDisplay: "",
    statusValue: true,
  },
  plowingInput: {
    landDetailId: 0,
    partitionLandDetailId: 0,
    ID: 0,
    plowingDate: "",
    typeofPlowing: "",
    plowingExp: "",   
  },
  isFormSubmit: true,
}

const plowingData = (state = initialPlowingData, action: any) => {
  switch (action.type) {
    case STORE_PLOWINGS_STARTED:
      return {
        ...state,
        isFormSubmit: true,
        plowingInput: action.input
      };
    case STORE_PLOWINGS_COMPLETED:
      return {
        ...state,
        isFormSubmit: false,
        // status: action.payload.status     
      };
    case STORE_PLOWINGS_FAILED:
      return {
        ...state,
        isFormSubmit: true,
      };
    case GET_PLOWINGS_STARTED:
      return {
        ...state,
      };
    case GET_PLOWINGS_COMPLETED:
      return {
        ...state,
        PlowingItems: action.payload,
      };
    case GET_PLOWINGS_FAILED:
      return {
        ...state,
        error: action.error
      };
    case DELETE_PLOWINGS_STARTED:
      return {
        ...state,
        isFormSubmit: false,
        plowingInput: action.input
      };
    case DELETE_PLOWINGS_COMPLETED:
      let PlowingList = state.PlowingItems;
      if (action.input.id != 0) {

        const index = PlowingList.findIndex((plowing: any) => plowing.id === action.input.id);
        PlowingList.splice(index, 1);
      };
      return {
        ...state,
        isFormSubmit: true,
        // status: action.payload,
        plowingInput: action.input,
        PlowingList: PlowingList
      };
    case DELETE_PLOWINGS_FAILED:
      return {
        ...state,
        error: action.error
      };
    case GET_PLOWINGSBYID_STARTED:
      return {
        ...state,
        plowingInput: action.payload,
      };
    case GET_PLOWINGSBYID_COMPLETED:
      return {
        ...state,
        PlowingItems: action.payload
      };
    case GET_PLOWINGSBYID_FAILED:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
};

export default plowingData;