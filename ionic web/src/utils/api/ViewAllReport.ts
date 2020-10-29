 
import { Http } from "../Http";
import { AxiosPromise } from "axios";
//import { getUserQueryString, setUserForCRUD } from "../../store/selectors/Accounts";

export class ViewAllReportAPI { 

  public static getViewAllReportLists() {
    return Http.axios().get('/api/ViewAllReport/get-viewAllreports')
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }
}