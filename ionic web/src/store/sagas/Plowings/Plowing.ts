import { put, CallEffect, call } from "redux-saga/effects";
import {
  STORE_PLOWINGS_COMPLETED, STORE_PLOWINGS_FAILED,
  GET_PLOWINGSBYID_COMPLETED, GET_PLOWINGSBYID_FAILED, GET_PLOWINGS_COMPLETED, GET_PLOWINGS_FAILED,
  DELETE_PLOWINGS_COMPLETED, DELETE_PLOWINGS_FAILED
}
  from '../../actions/Plowing';
import { PlowingAPI } from "../../../utils/api/PlowingAPI";

export function* storePlowingData(request: any) {
  try {
    const { data } = yield call(PlowingAPI.addPlowing, request.input);
   console.log(data);
    yield put({
      type: STORE_PLOWINGS_COMPLETED,
      input: request.input,
      payload: data
    });

  } catch (e) {
    yield put({ type: STORE_PLOWINGS_FAILED, payload: e.message });
  }
}

export function* getPlowingList() {
  try {
    const { data } = yield call(PlowingAPI.getPlowinglList);
    console.log(data);
    yield put({
      type: GET_PLOWINGS_COMPLETED,
      payload: data
    });
  } catch (e) {
    yield put({ type: GET_PLOWINGS_FAILED, payload: e.message });
  }
}

export function* getPlowingByIdList(request: any) {
  try {
    const { data } = yield call(PlowingAPI.getPlowinglByIdList, request.id);
    console.log(data);
    yield put({
      type: GET_PLOWINGSBYID_COMPLETED,
      payload: data
    });
  } catch (e) {
    yield put({ type: GET_PLOWINGSBYID_FAILED, payload: e.message });
  }
}

export function* deletePlowing(request: any) {
  try {
    const result = yield call(PlowingAPI.deletePlowing, request.id);
    var status = result.data;
    yield put({
      type: DELETE_PLOWINGS_COMPLETED,
      payload: result.data,
      input: request
    });

  } catch (e) {
    yield put({ type: DELETE_PLOWINGS_FAILED, payload: e.message });
  }
}