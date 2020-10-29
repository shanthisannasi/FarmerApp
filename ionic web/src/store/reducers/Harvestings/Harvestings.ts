import {
  STORE_HARVESTINGS_STARTED, STORE_HARVESTINGS_COMPLETED, STORE_HARVESTINGS_FAILED,
  GET_HARVESTINGSBYID_STARTED, GET_HARVESTINGSBYID_COMPLETED, GET_HARVESTINGSBYID_FAILED,
  GET_HARVESTINGS_STARTED, GET_HARVESTINGS_COMPLETED, GET_HARVESTINGS_FAILED,
  DELETE_HARVESTINGS_STARTED, DELETE_HARVESTINGS_COMPLETED, DELETE_HARVESTINGS_FAILED,
}
  from '../../actions/Harvestings';

const initialHarvestData = {
  isFormSubmit: true,
  HarvestItems: [] as any,
  status: {
    statusCode: 300,
    statusDisplay: "",
    statusValue: true,
  },
  harvestInput: {
    landDetailId: 0,
    partitionLandDetailId: 0,
    ID: 0,
    date: "",
    cost: 0,
    noOfLabours: 0,
    labourCost: 0,
    notes: "", 
  },
  isLoading:true,
  isHarvestExist: false
}

const harvestData = (state = initialHarvestData, action: any) => {
  switch (action.type) {
    case STORE_HARVESTINGS_STARTED:
      return {
        ...state,
        isFormSubmit: true,
        harvestInput: action.input
      };
    case STORE_HARVESTINGS_COMPLETED:
      let data = action.payload;
      return {
        ...state,
        isFormSubmit: false,
        harvestInput: action.input,
        HarvestItems: data,
        isHarvestExist: action.payload.status
      };
    case STORE_HARVESTINGS_FAILED:
      return {
        ...state,
        isFormSubmit: true,
      };
    case GET_HARVESTINGS_STARTED:
      return {
        ...state,
        HarvestItems:[],
        isLoading:true,
      };
    case GET_HARVESTINGS_COMPLETED:
      return {
        ...state,
        HarvestItems: action.payload,
        isLoading:false,
      };
    case GET_HARVESTINGS_FAILED:
      return {
        ...state,
        isLoading:false,
        error: action.error
      };
    case DELETE_HARVESTINGS_STARTED:
      return {
        ...state,
        isFormSubmit: false,
        harvestInput: action.input
      };
    case DELETE_HARVESTINGS_COMPLETED:
      let HarvestList = state.HarvestItems;
      if (action.input.id != 0) {

        const index = HarvestList.findIndex((harvest: any) => harvest.id === action.input.id);
        HarvestList.splice(index, 1);
      };
      return {
        ...state,
        isFormSubmit: true,
        // status: action.payload,
        harvestInput: action.input,
        HarvestList: HarvestList
      };
    case DELETE_HARVESTINGS_FAILED:
      return {
        ...state,
        error: action.error
      };
    case GET_HARVESTINGSBYID_STARTED:
      return {
        ...state,
        harvestInput: action.payload,
      };
    case GET_HARVESTINGSBYID_COMPLETED:
      return {
        ...state,
        HarvestItems: action.payload
      };
    case GET_HARVESTINGSBYID_FAILED:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
};

export default harvestData;