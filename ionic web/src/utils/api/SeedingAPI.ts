import { Http } from "../Http";
import { AxiosPromise } from "axios";
import { getUserQueryString, setUserForCRUD } from "../../store/selectors/Accounts";

export class SeedingAPI {
  public static addSeed(input: any) {
    setUserForCRUD(input);
    var obj = JSON.stringify(input);
    var tObj = JSON.parse(obj);
    var url = '/api/Seed/add-Seed';
    if (input.id && input.id !== 0) {
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

  public static getSeedList() {
    return Http.axios().get('/api/Seed/seed-list' + "?" + getUserQueryString())
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }

  public static getSeedByIdList(id: number) {
    return Http.axios().get('/api/Seed/get-Seed/' + id)
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }

  public static deleteSeed(id: number) {
    return Http.axios().delete('/api/Seed/delete-Seed/' + id)
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }


}