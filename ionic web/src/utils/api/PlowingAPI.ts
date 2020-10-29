import { Http } from "../Http";
import { AxiosPromise } from "axios";
import { getUserQueryString, setUserForCRUD } from "../../store/selectors/Accounts";

export class PlowingAPI {
  public static addPlowing(input: any) {
    setUserForCRUD(input);
    var obj = JSON.stringify(input);
    var tObj = JSON.parse(obj);
    var url = '/api/Plowing/add-Plowing';
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
      .then(response => {
        return response;
      })
        .catch((e) => {
          return e.response;
        }) as AxiosPromise<any>;
    }
  }

  public static getPlowinglList() {
    return Http.axios().get('/api/Plowing/plowing-list' + "?" + getUserQueryString())
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }

  public static getPlowinglByIdList(id: number) {
    return Http.axios().get('/api/Plowing/get-Plowing/' + id)
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }

  public static deletePlowing(id: number) {
    return Http.axios().delete('/api/Plowing/delete-Plowing/' + id)
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }


}