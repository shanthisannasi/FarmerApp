import { put, CallEffect, call } from "redux-saga/effects";
import {
  FETCH_LOGIN_FAILED, FETCH_LOGIN_COMPLETED, FETCH_LOGOUT_FAILED, FETCH_LOGOUT_COMPLETED
} from "../../actions/Login";
import { LoginAPI } from "../../../utils/api/LoginAPI";
import { any } from "prop-types";
import { AxiosPromise } from "axios";


export function* fetchLoginData(request: any) {
  try {
    const result = yield call(LoginAPI.fetchLoginData, request.input);
    console.log(result.data);
    var status = result.data;
    yield put({
      type: FETCH_LOGIN_COMPLETED,
      //for web
      //payload: result.data.result,
      //for mobile
      payload: result.data,
      input: request.input,
      sessionTimeout: result.data.sessionTimeout
    });

  } catch (e) {
    yield put({ type: FETCH_LOGIN_FAILED, payload: e.message });
  }
}

export function* fetchLogout() {
  try {
    const result = yield call(LoginAPI.fetchLogOut);
    var status = result.data;
    yield put({
      type: FETCH_LOGOUT_COMPLETED,
      payload: result.data
    });

  } catch (e) {
    yield put({ type: FETCH_LOGOUT_FAILED, payload: e.message });
  }
}