import { put, CallEffect, call } from "redux-saga/effects";
import {
  STORE_PESTCONTROL_COMPLETED, STORE_PESTCONTROL_FAILED,
  GET_PESTCONTROLBYID_COMPLETED, GET_PESTCONTROLBYID_FAILED,
  GET_PESTCONTROL_COMPLETED, GET_PESTCONTROL_FAILED,
  DELETE_PESTCONTROL_COMPLETED, DELETE_PESTCONTROL_FAILED
}
  from '../../actions/PestControl';
import { PestControlAPI } from "../../../utils/api/PestControlAPI";

export function* storePestControlData(request: any) {
  try {
    const { data } = yield call(PestControlAPI.addPestControl, request.input);
     console.log(data);
    yield put({
      type: STORE_PESTCONTROL_COMPLETED,
      input: request.input,
      payload: data
    });

  } catch (e) {
    yield put({ type: STORE_PESTCONTROL_FAILED, payload: e.message });
  }
}

export function* getPestControlList() {
  try {
    const { data } = yield call(PestControlAPI.getPestControlList);
    console.log(data);
    yield put({
      type: GET_PESTCONTROL_COMPLETED,
      payload: data
    });
  } catch (e) {
    yield put({ type: GET_PESTCONTROL_FAILED, payload: e.message });
  }
}

export function* getPestControlByIdList(request: any) {
  try {
    const { data } = yield call(PestControlAPI.getPestControlByIdList, request.id);
    console.log(data);
    yield put({
      type: GET_PESTCONTROLBYID_COMPLETED,
      payload: data
    });
  } catch (e) {
    yield put({ type: GET_PESTCONTROLBYID_FAILED, payload: e.message });
  }
}

export function* deletePestControl(request: any) {
  try {
    const result = yield call(PestControlAPI.deletePestConytrol, request.id);
    var status = result.data;
    yield put({
      type: DELETE_PESTCONTROL_COMPLETED,
      payload: result.data,
      input: request
    });

  } catch (e) {
    yield put({ type: DELETE_PESTCONTROL_FAILED, payload: e.message });
  }
}