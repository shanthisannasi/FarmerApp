import {
  STORE_LANDDETAIL_STARTED, STORE_LANDDETAIL_COMPLETED, STORE_LANDDETAIL_FAILED,
  GET_LANDDETAIL_STARTED, GET_LANDDETAIL_COMPLETED, GET_LANDDETAIL_FAILED,
  GET_LANDDETAILBYID_STARTED, GET_LANDDETAIBYID_COMPLETED, GET_LANDDETAILBYID_FAILED,
  DELETE_LANDDETAIL_STARTED, DELETE_LANDDETAIL_COMPLETED, DELETE_LANDDETAIL_FAILED
}
  from '../../actions/LandDetail';

const initialLandDetailData = {
  Landitems: [],
  LandItem: {},
  status: {
    statusCode: 300,
    statusDisplay: "",
    statusValue: true,
  },
  landDetailInput: {
    ID: 0,
    StateId: 0,
    city: "",
    village: "",
    pattaNumber: 0,
    surveyNumber: 0,
    areaSize: 0.0,
    notes: "",
    name: "",
  },
  isFormSubmit: true,
  isLoading:true,
  isLandNameExist: false
}

const LandDetailData = (state = initialLandDetailData, action: any) => {
  switch (action.type) {
    case STORE_LANDDETAIL_STARTED:
      return {
        ...state,
        isFormSubmit: true,
        landDetailInput: action.input
      };
    case STORE_LANDDETAIL_COMPLETED:
      return {
        ...state,
        isFormSubmit: false,
        isLandNameExist: action.payload.status
        // status: action.payload.status     
      };
    case STORE_LANDDETAIL_FAILED:
      return {
        ...state,
        isFormSubmit: true,
      };
    case GET_LANDDETAIL_STARTED:
      return {
        ...state,
        isLoading:true,
        Landitems:[]
      };
    case GET_LANDDETAIL_COMPLETED:
      return {
        ...state,
        isLoading:false,
        Landitems: action.payload
      };
    case GET_LANDDETAIL_FAILED:
      return {
        ...state,
        isLoading:false,
        error: action.error
      };
    case DELETE_LANDDETAIL_STARTED:
      return {
        ...state,
        isFormSubmit: false,
        partitionLandInput: action.input
      };
    case DELETE_LANDDETAIL_COMPLETED:
      let LandList = state.Landitems;
      if (action.input.id != 0) {

        const index = LandList.findIndex((Land: any) => Land.id === action.input.id);
        LandList.splice(index, 1);
      };
      return {
        ...state,
        isFormSubmit: true,
        LandInput: action.input,
        LandList: LandList
      };
    case DELETE_LANDDETAIL_FAILED:
      return {
        ...state,
        error: action.error
      };
    case GET_LANDDETAILBYID_STARTED:
      return {
        ...state,
       LandInput: action.payload,
      };
    case GET_LANDDETAIBYID_COMPLETED:
      return {
        ...state,
        LandItem: action.payload
      };
    case GET_LANDDETAILBYID_FAILED:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
};

export default LandDetailData;