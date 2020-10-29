import {
  STORE_PESTCONTROL_STARTED, STORE_PESTCONTROL_COMPLETED, STORE_PESTCONTROL_FAILED,
  GET_PESTCONTROLBYID_STARTED, GET_PESTCONTROLBYID_COMPLETED, GET_PESTCONTROLBYID_FAILED,
  GET_PESTCONTROL_STARTED, GET_PESTCONTROL_COMPLETED, GET_PESTCONTROL_FAILED,
  DELETE_PESTCONTROL_STARTED, DELETE_PESTCONTROL_COMPLETED, DELETE_PESTCONTROL_FAILED
}
  from '../../actions/PestControl';

const initialPestControlData = {
  PetsControlItems:[] as any,
  status: {
    statusCode: 300,
    statusDisplay: "",
    statusValue: true,
  },
  pestControlInput: {
    landDetailId: 0,
    partitionLandDetailId: 0,
    ID: 0,
    pestControlDate: "",
    nameofthePestSide: "",
    cost: "",
    purpose: "",
    labourCost: "",
  },
  isFormSubmit: true,
  isLoading: true,
}

const pestControlData = (state = initialPestControlData, action: any) => {
  switch (action.type) {
    case STORE_PESTCONTROL_STARTED:
      return {
        ...state,
        isFormSubmit: true,
        pestControlInput: action.input,
       // isLoading: true,
      };
    case STORE_PESTCONTROL_COMPLETED:
      return {
        ...state,
        isFormSubmit: false,
       // isLoading: false,
        // status: action.payload.status     
      };
    case STORE_PESTCONTROL_FAILED:
      return {
        ...state,
        isFormSubmit: true,
       // isLoading: true,
      };
    case GET_PESTCONTROL_STARTED:
      return {
        ...state,
      };
    case GET_PESTCONTROL_COMPLETED:
      return {
        ...state,
        PetsControlItems: action.payload,
      };
    case GET_PESTCONTROL_FAILED:
      return {
        ...state,
        error: action.error
      };
    case DELETE_PESTCONTROL_STARTED:
      return {
        ...state,
        isFormSubmit: true,
        pestControlInput: action.input
      };
    case DELETE_PESTCONTROL_COMPLETED:
      let PestControlList = state.PetsControlItems;
      if (action.input.id != 0) {

        const index = PestControlList.findIndex((pestControl: any) => pestControl.id === action.input.id);
        PestControlList.splice(index, 1);
      };
      return {
        ...state,
        isFormSubmit: false,
        // status: action.payload,
        pestControlInput: action.input,
        PestControlList: PestControlList
      };
    case DELETE_PESTCONTROL_FAILED:
      return {
        ...state,
        isFormSubmit: true,
        error: action.error
      };
    case GET_PESTCONTROLBYID_STARTED:
      return {
        ...state,
        pestControlInput: action.payload,
      };
    case GET_PESTCONTROLBYID_COMPLETED:
      return {
        ...state,
        PetsControlItems: action.payload
      };
    case GET_PESTCONTROLBYID_FAILED:
      return {
        ...state,
        error: action.error
      };


    default:
      return state;
  }
};

export default pestControlData;