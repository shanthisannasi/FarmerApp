import { STORE_REG_STARTED, STORE_REG_COMPLETED, STORE_REG_FAILED }
  from '../../actions/Registration';

const initialRegData = {
  status: {
    statusCode: 300,
    statusDisplay: "",
    statusValue: true,
  },
  regInput: {
    userName: "",
    password: "",
    mobileNumber: "",
    email:"",
  },
  isFormSubmit: false,  
  isLoading:true,
}

const regData = (state=initialRegData, action:any) => {
  switch (action.type) {
    case STORE_REG_STARTED:
      return {
        ...state,       
        isFormSubmit: false,
        regInput: action.input
      };
    case STORE_REG_COMPLETED:
      return {
        ...state,       
        isFormSubmit: true,
        status: action.payload,
        loginInput: action.input,        
        userDetail: action.payload.userDetail,
      };
    case STORE_REG_FAILED:
      return {
        ...state,       
      };

    default:
      return state;
  }
};

export default regData;