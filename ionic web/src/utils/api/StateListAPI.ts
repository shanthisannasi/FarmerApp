import { Http } from "../Http";
import { AxiosPromise } from "axios";

export class StateListAPI {

  public static getStateList() {
    return Http.axios().get('/api/StateList/get-StateList')
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }

}