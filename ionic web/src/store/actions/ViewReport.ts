export const GET_VIEWREPORT_STARTED = "GET_VIEWREPORT_STARTED";
export const GET_VIEWREPORT_COMPLETED = "GET_VIEWREPORT_COMPLETED";
export const GET_VIEWREPORT_FAILED = "GET_VIEWREPORT_FAILED";



export const getViewReportList = (id:any) => {
  return {
    type: GET_VIEWREPORT_STARTED,
    id: id
  };
};

