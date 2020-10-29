import {
  GET_VIEWALLREPORT_STARTED, GET_VIEWALLREPORT_COMPLETED,GET_VIEWALLREPORT_FAILED
}
  from '../../actions/ViewAllReport';

const initialViewAllReportData = {
  viewAllReports : [] as any,

   viewAllReport: {
    landName: "",
    partition: "",
    totalIncome: 0,
    totalExpense: 0
    
  },  
}

const viewAllReportData = (state = initialViewAllReportData, action: any) => {
  switch (action.type) {
    
    case GET_VIEWALLREPORT_STARTED:
      return {
        ...state,  
        viewAllReports : []
      };
    case GET_VIEWALLREPORT_COMPLETED:
      return {
        ...state,
        viewAllReports: action.payload    
      }
    case GET_VIEWALLREPORT_FAILED:
      return {
        ...state,
        error: action.error
      }
    

    default:
      return state;
  }
};

export default viewAllReportData;