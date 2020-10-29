import {
  GET_VIEWREPORT_STARTED, GET_VIEWREPORT_COMPLETED,GET_VIEWREPORT_FAILED
}
  from '../../actions/ViewReport';

const initialViewReportData = {
  viewReports : [] as any,

   viewReport: {
    landName: "",
    partition: "",
    income: "",
    expense: "",
    purpose: "",
  },  
}

const viewReportData = (state = initialViewReportData, action: any) => {
  switch (action.type) {
    
    case GET_VIEWREPORT_STARTED:
      return {
        ...state,  
        viewReports : []
      };
    case GET_VIEWREPORT_COMPLETED:
      return {
        ...state,
        viewReports: action.payload    
      }
    case GET_VIEWREPORT_FAILED:
      return {
        ...state,
        error: action.error
      }
    

    default:
      return state;
  }
};

export default viewReportData;