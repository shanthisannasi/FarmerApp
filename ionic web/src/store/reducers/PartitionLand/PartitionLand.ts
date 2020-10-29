import {
  STORE_PARTITIONLAND_STARTED, STORE_PARTITIONLAND_COMPLETED, STORE_PARTITIONLAND_FAILED,
  GET_PARTITIONLAND_STARTED, GET_PARTITIONLAND_COMPLETED, GET_PARTITIONLAND_FAILED,
  DELETE_PARTITIONLAND_STARTED, DELETE_PARTITIONLAND_COMPLETED, DELETE_PARTITIONLAND_FAILED,
  GET_PARTITIONLANDBYID_STARTED, GET_PARTITIONLANDBYID_COMPLETED, GET_PARTITIONLANDBYID_FAILED
}
  from '../../actions/PartitionLand';

const initialPartitionLandData = {
  PLitems: [] as any,  
  PLitem: {},
  error: '',
  status: {
    statusCode: 300,
    statusDisplay: "",
    statusValue: true,
  },
  partitionLandInput: {
    landDirection: "",
    areaSize: "",
    notes: "", 
    landDetailId: 0,
    ID: 0
  },
  isLandId: true,
  isFormSubmit: true,
  isLoading:true,
  isPartLandNameExist: false
}

const PartitionLandData = (state = initialPartitionLandData, action: any) => {
  switch (action.type) {
    case STORE_PARTITIONLAND_STARTED:
      return {
        ...state,
        isFormSubmit: true,
        partitionLandInput: action.input
      };
    case STORE_PARTITIONLAND_COMPLETED:
      let data = action.payload;
      return {
        ...state,
        isFormSubmit: false,
        partitionLandInput: action.input,
        PLitem: data,
        isPartLandNameExist: action.payload.status
        // status: action.payload.status     
      };
    case STORE_PARTITIONLAND_FAILED:
      return {
        ...state,
        isFormSubmit: true,
      };
    case GET_PARTITIONLAND_STARTED:
      return {
        ...state, 
        PLitems:[],
        isLoading:true,  
      };
    case GET_PARTITIONLAND_COMPLETED:
      return {
        ...state,      
        PLitems: action.payload,
        isLoading:false,
      };
    case GET_PARTITIONLAND_FAILED:
      return {
        ...state,      
        error: action.error,
        isLoading:false,
      };
       case DELETE_PARTITIONLAND_STARTED:
      return {
        ...state,
        isFormSubmit: false,
        partitionLandInput: action.input
      };
    case DELETE_PARTITIONLAND_COMPLETED:
      let PartLandList = state.PLitems;
      if (action.input.id != 0) {

        const index = PartLandList.findIndex((PartLand: any) => PartLand.id === action.input.id);
        PartLandList.splice(index, 1);
      };
      return {
        ...state,
        isFormSubmit: true,
       // status: action.payload,
        partitionLandInput: action.input,
        PartLandList: PartLandList
      };
    case DELETE_PARTITIONLAND_FAILED:
      return {
        ...state,
        error: action.error
      };
    case GET_PARTITIONLANDBYID_STARTED:
      return {
        ...state,
        partitionLandInput: action.payload,
        isLandId : true
      };
    case GET_PARTITIONLANDBYID_COMPLETED:
      return {
        ...state,
        PLitem: action.payload,
         isLandId: false
      };
    case GET_PARTITIONLANDBYID_FAILED:
      return {
        ...state,
        error: action.error,
         isLandId: true
      };
    
    default:
      return state;
  }
};

export default PartitionLandData;