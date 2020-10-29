import { Http } from "../Http";
import { AxiosPromise } from "axios";
import { getUserQueryString, setUserForCRUD } from "../../store/selectors/Accounts";

export class PestControlAPI {
  public static addPestControl(input: any) {
    setUserForCRUD(input);
    var obj = JSON.stringify(input);
    var tObj = JSON.parse(obj);
    var url = '/api/PestControl/add-PestControl';    
      // url = '/api/Harvesting/add-Harvestings/' + input.id + "?";
      return Http.axios().post(url, obj,
        {
          headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Headers": "*"
          }
        })
        .then(response => {
          return response;
        }).catch((e: any) => {
          console.log("Error in post" + e);
          return e.response;
        }) as AxiosPromise<any>;        
  }

  public static getPestControlList() {
    return Http.axios().get('/api/PestControl/pestControl-list' + "?" + getUserQueryString())
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }

  public static getPestControlByIdList(id: number) {
    return Http.axios().get('/api/PestControl/get-PestControl/' + id)
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }

  public static deletePestConytrol(id: number) {
    return Http.axios().delete('/api/PestControl/delete-PestControl/' + id)
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }


}