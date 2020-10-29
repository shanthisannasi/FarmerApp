
import { Http } from "../Http";
import { AxiosPromise } from "axios";
import { getUserQueryString, setUserForCRUD } from "../../store/selectors/Accounts";

export class WeedRemoveAPI {
  public static addWeedRemove(input: any) {
    setUserForCRUD(input);
    var obj = JSON.stringify(input);
    var tObj = JSON.parse(obj);
    var url = '/api/WeedRemove/add-WeedRemove';
    if (input.id && input.id !== 0) {
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
    else {
      return Http.axios().post(url, tObj)
        .catch((e) => {
          return e.response;
        }) as AxiosPromise<any>;
    }
  }

  public static getWeedRemoveList() {
    return Http.axios().get('/api/WeedRemove/WeedRemove-list' + "?" + getUserQueryString())
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }

  public static getWeedRemoveByIdList(id: number) {
    return Http.axios().get('/api/WeedRemove/get-WeedRemove/' + id)
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }

  public static deleteWeedRemove(id: number) {
    return Http.axios().delete('/api/WeedRemove/delete-WeedRemove/' + id)
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }


}