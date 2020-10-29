import { put, CallEffect, call } from "redux-saga/effects";
import {
  STORE_WEEDREMOVE_COMPLETED, STORE_WEEDREMOVE_FAILED,
  GET_WEEDREMOVE_COMPLETED, GET_WEEDREMOVE_FAILED,
  GET_WEEDREMOVEBYID_COMPLETED, GET_WEEDREMOVEBYID_FAILED,
  DELETE_WEEDREMOVE_COMPLETED, DELETE_WEEDREMOVE_FAILED
}
  from '../../actions/WeedRemove';
import { WeedRemoveAPI } from "../../../utils/api/WeedRemoveAPI";

export function* storeWeedRemoveData(request: any) {
  try {
    const { data } = yield call(WeedRemoveAPI.addWeedRemove, request.input);
    console.log(data);
    yield put({
      type: STORE_WEEDREMOVE_COMPLETED,
      input: request.input,
      payload: data
    });

  } catch (e) {
    yield put({ type: STORE_WEEDREMOVE_FAILED, payload: e.message });
  }
}

export function* getWeedRemoveList() {
  try {
    const { data } = yield call(WeedRemoveAPI.getWeedRemoveList);
    console.log(data);
    yield put({
      type: GET_WEEDREMOVE_COMPLETED,
      payload: data
    });
  } catch (e) {
    yield put({ type: GET_WEEDREMOVE_FAILED, payload: e.message });
  }
}

export function* getWeedRemoveByIdList(request: any) {
  try {
    const { data } = yield call(WeedRemoveAPI.getWeedRemoveByIdList, request.id);
    console.log(data);
    yield put({
      type: GET_WEEDREMOVEBYID_COMPLETED,
      payload: data
    });
  } catch (e) {
    yield put({ type: GET_WEEDREMOVEBYID_FAILED, payload: e.message });
  }
}

export function* deleteWeedRemove(request: any) {
  try {
    const result = yield call(WeedRemoveAPI.deleteWeedRemove, request.id);
    var status = result.data;
    yield put({
      type: DELETE_WEEDREMOVE_COMPLETED,
      payload: result.data,
      input: request
    });

  } catch (e) {
    yield put({ type: DELETE_WEEDREMOVE_FAILED, payload: e.message });
  }
}