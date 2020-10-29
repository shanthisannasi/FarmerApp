
import { Http } from "../Http";
import { AxiosPromise } from "axios";
import { getUserQueryString, setUserForCRUD } from "../../store/selectors/Accounts";

export class PArtitionLandAPI {
  public static addPartitionLand(input: any) {
    setUserForCRUD(input);
    var obj = JSON.stringify(input);
    var tObj = JSON.parse(obj);
    var url = '/api/PartitionLand/add-PartitionLand';
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

  public static getPartitionLandList() {
    return Http.axios().get('/api/PartitionLand/PartitionLand-list' + "?" + getUserQueryString())
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }

  public static getPartitionLandByIdList(id: number) {
    return Http.axios().get('/api/PartitionLand/get-PartitionLand/' + id)    
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }


  public static deletePartitionLand(id: number) {
    return Http.axios().delete('/api/PartitionLand/delete-PartLand/' + id)
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }


}


