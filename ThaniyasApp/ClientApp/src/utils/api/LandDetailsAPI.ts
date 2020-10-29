
import { Http } from "../Http";
import { AxiosPromise } from "axios";
import { getUserQueryString, setUserForCRUD } from "../../store/selectors/Accounts";

export class LandDetailsAPI {
  public static addLandDetails(input: any) {
    setUserForCRUD(input);
    var obj = JSON.stringify(input);
    var tObj = JSON.parse(obj);
    var url = '/api/LandDetails/add-LandDetail';
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
  public static getLandDetailsList() {
    return Http.axios().get('/api/LandDetails/get-LandDetails' + "?" + getUserQueryString())
      .then(response => {
        console.log(response);
        return response;
      }).catch((e: any) => {
        console.log("Error in post" + e);
        return e.response;
      }) as AxiosPromise<any>;
  }

  public static getLandDetailByIdList(id: number) {
    return Http.axios().get('/api/LandDetails/get-LandDetail/' + id)
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }

  public static deleteLand(id: number) {
    return Http.axios().delete('/api/LandDetails/delete-LandDetail/' + id)
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }

}