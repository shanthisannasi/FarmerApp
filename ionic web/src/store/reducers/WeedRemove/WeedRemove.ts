import {
  STORE_WEEDREMOVE_STARTED, STORE_WEEDREMOVE_COMPLETED, STORE_WEEDREMOVE_FAILED,
  GET_WEEDREMOVE_STARTED, GET_WEEDREMOVE_COMPLETED, GET_WEEDREMOVE_FAILED,
  GET_WEEDREMOVEBYID_STARTED, GET_WEEDREMOVEBYID_COMPLETED, GET_WEEDREMOVEBYID_FAILED,
  DELETE_WEEDREMOVE_STARTED, DELETE_WEEDREMOVE_COMPLETED, DELETE_WEEDREMOVE_FAILED
}
  from '../../actions/WeedRemove';

const initialWeedRemoveData = {
  WeedItems: [] as any,
  status: {
    statusCode: 300,
    statusDisplay: "",
    statusValue: true,
  },
  weedRemoveInput: {
    landDetailId: 0,
    partitionLandDetailId: 0,
    ID:0,
    date: "",
    cost: 0,
    noOfLabours: 0,
    labourCost: 0,
    notes: "", 
  },
  isFormSubmit: true,
  isLoading:true,
  isWeedRemoveExist:false
}

const weedRemoveData = (state = initialWeedRemoveData, action: any) => {
  switch (action.type) {
    case STORE_WEEDREMOVE_STARTED:
      return {
        ...state,
        isFormSubmit: true,
        weedRemoveInput: action.input
      };
    case STORE_WEEDREMOVE_COMPLETED:
      return {
        ...state,
        isFormSubmit: false,
        isWeedRemoveExist: action.payload.status
        // status: action.payload.status     
      };
    case STORE_WEEDREMOVE_FAILED:
      return {
        ...state,
        isFormSubmit: true,
      };
    case GET_WEEDREMOVE_STARTED:
      return {
        ...state,
        WeedItems:[],
        isLoading:true,
      };
    case GET_WEEDREMOVE_COMPLETED:
      return {
        ...state,
        WeedItems: action.payload,  
        isLoading:false,
      };
    case GET_WEEDREMOVE_FAILED:
      return {
        ...state,
        error: action.error,
        isLoading:false,
      };
    case DELETE_WEEDREMOVE_STARTED:
      return {
        ...state,
        isFormSubmit: false,
        weedRemoveInput: action.input
      };
    case DELETE_WEEDREMOVE_COMPLETED:
      let WeedRemoveList = state.WeedItems;
      if (action.input.id != 0) {

        const index = WeedRemoveList.findIndex((weedRemove: any) => weedRemove.id === action.input.id);
        WeedRemoveList.splice(index, 1);
      };
      return {
        ...state,
        isFormSubmit: true,
        // status: action.payload,
        weedRemoveInput: action.input,
        WeedRemoveList: WeedRemoveList
      };
    case DELETE_WEEDREMOVE_FAILED:
      return {
        ...state,
        error: action.error
      };
    case GET_WEEDREMOVEBYID_STARTED:
      return {
        ...state,
        weedRemoveInput: action.payload,
      };
    case GET_WEEDREMOVEBYID_COMPLETED:
      return {
        ...state,
        WeedItems: action.payload
      };
    case GET_WEEDREMOVEBYID_FAILED:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
};

export default weedRemoveData;