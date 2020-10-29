import { Http } from "../Http";
import { AxiosPromise } from "axios";
import { getUserQueryString, setUserForCRUD } from "../../store/selectors/Accounts";

export class SaleAPI {
  public static addSale(input: any) {
    setUserForCRUD(input);
    var obj = JSON.stringify(input);
    var tObj = JSON.parse(obj);
    var url = '/api/Sale/add-Sale';
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
        .catch((e) => {
          return e.response;
        }) as AxiosPromise<any>;
    }
  }

  public static getSaleList() {
    return Http.axios().get('/api/Sale/sale-list' + "?" + getUserQueryString())
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }

  public static getSaleByIdList(id: number) {
    return Http.axios().get('/api/Sale/get-Sale/' + id)
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }

  public static deleteSale(id: number) {
    return Http.axios().delete('/api/Sale/delete-Sale/' + id)
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }


}