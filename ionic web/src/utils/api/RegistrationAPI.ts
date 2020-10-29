import { Http } from "../Http";
import { AxiosPromise } from "axios";

export class RegistrationAPI {
  public static storeRegistration(input: any) {
    var obj = JSON.stringify(input);
    var tObj = JSON.parse(obj);
    var url = '/api/Users/add-user';
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
}