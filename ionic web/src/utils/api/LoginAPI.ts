import { HttpLocal, Http } from "../Http";
import { AxiosPromise, AxiosRequestConfig } from "axios";
import axios from 'axios';
import { HTTP,  } from '@ionic-native/http/ngx';

export class LoginAPI {
  //static http: HTTP;
  //private httpionic: HTTP
  //constructor(private http: HTTP) {}

  //const axios = require('axios');
  public static fetchLoginData(input: any) {
    var obj = JSON.stringify(input);
    //For mobile app
    
    var url = "api/Accounts/login";
    if(input.isgooglelogin===true){
      url = "api/Accounts/google-login";
    }
    
    return Http.axios().post(url, obj,
      {
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        }
      })
      .then(response => {
        return response;
      }).catch((e: any) => {
        console.log("Error in post" + e);
        return e.response;
      }) as AxiosPromise<any>;

  }

  public static fetchLogOut() {
    return HttpLocal.axios().get('/Login/SignOutbyClient')
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }

  public static fetchCheckLoggedUser(userName: string) {
    return HttpLocal.axios().get('/Login/CheckIsCurrentUserValid?userName=' + userName)
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }
}