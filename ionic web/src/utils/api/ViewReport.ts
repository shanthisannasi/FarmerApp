 
import { Http } from "../Http";
import { AxiosPromise } from "axios";
//import { getUserQueryString, setUserForCRUD } from "../../store/selectors/Accounts";

export class ViewReportAPI { 

  public static getViewReportLists(id : number) {
    return Http.axios().get('/api/ViewReport/get-viewreports?id=' + id)
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }
}