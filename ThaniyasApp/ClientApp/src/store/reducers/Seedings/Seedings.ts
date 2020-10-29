import {
  STORE_SEEDINGS_STARTED, STORE_SEEDINGS_COMPLETED, STORE_SEEDINGS_FAILED,
  GET_SEEDINGBYID_STARTED, GET_SEEDINGBYID_COMPLETED, GET_SEEDINGBYID_FAILED,
  GET_SEEDING_STARTED, GET_SEEDING_COMPLETED, GET_SEEDING_FAILED,
  DELETE_SEEDING_STARTED, DELETE_SEEDING_COMPLETED, DELETE_SEEDING_FAILED
}
  from '../../actions/Seedings';

const initialSeedData = {
  Seeditems: [] as any,
  isFormSubmit: true,
  status: {
    statusCode: 300,
    statusDisplay: "",
    statusValue: true,
  },
  seedInput: {
    landDetailId: 0,
    partitionLandDetailId: 0,
    ID: 0,
    quantity: "",
    seedName: "",
    seedCost: "",
    noOfLabours: "",
    labourCost: "",
  },

}

const seedData = (state = initialSeedData, action: any) => {
  switch (action.type) {
    case STORE_SEEDINGS_STARTED:
      return {
        ...state,
        isFormSubmit: true,
        seedInput: action.input
      };
    case STORE_SEEDINGS_COMPLETED:
      return {
        ...state,
        isFormSubmit: false      
      };
    case STORE_SEEDINGS_FAILED:
      return {
        ...state,
        isFormSubmit: true  
      };
    case GET_SEEDING_STARTED:
      return {
        ...state,
      };
    case GET_SEEDING_COMPLETED:
      return {
        ...state,
        Seeditems: action.payload
      };
    case GET_SEEDING_FAILED:
      return {
        ...state,
        error: action.error
      };
    case DELETE_SEEDING_STARTED:
      return {
        ...state,
        isFormSubmit: false,
        seedInput: action.input
      };
    case DELETE_SEEDING_COMPLETED:
      let SeedList = state.Seeditems;
      if (action.input.id != 0) {

        const index = SeedList.findIndex((seed: any) => seed.id === action.input.id);
        SeedList.splice(index, 1);
      };
      return {
        ...state,
        isFormSubmit: true,
        // status: action.payload,
        seedInput: action.input,
        SeedList: SeedList
      };
    case DELETE_SEEDING_FAILED:
      return {
        ...state,
        error: action.error
      };
    case GET_SEEDINGBYID_STARTED:
      return {
        ...state,
        seedInput: action.payload,
      };
    case GET_SEEDINGBYID_COMPLETED:
      return {
        ...state,
        Seeditems: action.payload
      };
    case GET_SEEDINGBYID_FAILED:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export default seedData;