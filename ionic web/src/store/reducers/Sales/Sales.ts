import {
  STORE_SALES_STARTED, STORE_SALES_COMPLETED, STORE_SALES_FAILED,
  GET_SALESBYID_STARTED, GET_SALESBYID_COMPLETED, GET_SALESBYID_FAILED,
  GET_SALES_STARTED, GET_SALES_COMPLETED, GET_SALES_FAILED,
  DELETE_SALES_STARTED, DELETE_SALES_COMPLETED, DELETE_SALES_FAILED
}
  from '../../actions/Sales';

const initialSaleData = {
  SaleItems: [] as any,
  status: {
    statusCode: 300,
    statusDisplay: "",
    statusValue: true,
  },
  saleInput: {
    landDetailId: 0,
    partitionLandDetailId: 0,
    ID: 0,
    saleDate: "",
    quantity: 0,
    price: 0,
    buyerName: "",
    buyerMobileNumber: "",
    notes: "", 
  },
  isFormSubmit: true,
  isLoading:true,
}

const saleData = (state = initialSaleData, action: any) => {
  switch (action.type) {
    case STORE_SALES_STARTED:
      return {
        ...state,
        isFormSubmit: true,
        saleInput: action.input
      };
    case STORE_SALES_COMPLETED:
      return {
        ...state,
        isFormSubmit: false,
        // status: action.payload.status     
      };
    case STORE_SALES_FAILED:
      return {
        ...state,
        isFormSubmit: true,
      };
    case GET_SALES_STARTED:
      return {
        ...state,
        SaleItems:[],
        isLoading:true,
      };
    case GET_SALES_COMPLETED:
      return {
        ...state,
        SaleItems: action.payload,
        isLoading:false,
      };
    case GET_SALES_FAILED:
      return {
        ...state,
        error: action.error,
        isLoading:false,
      };
    case DELETE_SALES_STARTED:
      return {
        ...state,
        isFormSubmit: false,
        saleInput: action.input
      };
    case DELETE_SALES_COMPLETED:
      let SaleList = state.SaleItems;
      if (action.input.id != 0) {

        const index = SaleList.findIndex((sale: any) => sale.id === action.input.id);
        SaleList.splice(index, 1);
      };
      return {
        ...state,
        isFormSubmit: true,
        // status: action.payload,
        saleInput: action.input,
        SaleList: SaleList
      };
    case DELETE_SALES_FAILED:
      return {
        ...state,
        error: action.error
      };
    case GET_SALESBYID_STARTED:
      return {
        ...state,
        saleInput: action.payload,
      };
    case GET_SALESBYID_COMPLETED:
      return {
        ...state,
        SaleItems: action.payload
      };
    case GET_SALESBYID_FAILED:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
};

export default saleData;