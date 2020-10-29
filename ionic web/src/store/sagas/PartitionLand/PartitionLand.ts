import { put, CallEffect, call } from "redux-saga/effects";
import {
  STORE_PARTITIONLAND_COMPLETED, STORE_PARTITIONLAND_FAILED,
  GET_PARTITIONLAND_COMPLETED, GET_PARTITIONLAND_FAILED,
  DELETE_PARTITIONLAND_COMPLETED, DELETE_PARTITIONLAND_FAILED,
  GET_PARTITIONLANDBYID_COMPLETED, GET_PARTITIONLANDBYID_FAILED
}
  from '../../actions/PartitionLand';
import { PArtitionLandAPI } from '../../../utils/api/PartitionLandAPI';


export function* storePartitionLandData(request: any) {
  try {
    const { data } = yield call(PArtitionLandAPI.addPartitionLand, request.input);
    console.log(data);
    yield put({
      type: STORE_PARTITIONLAND_COMPLETED,
      input: request.input,
      payload:data
    });

  } catch (e) {
    yield put({ type: STORE_PARTITIONLAND_FAILED, payload: e.message });
  }
}

export function* getPartitionLandList() {
  try {
    const { data } = yield call(PArtitionLandAPI.getPartitionLandList);
    console.log(data);
    yield put({
      type: GET_PARTITIONLAND_COMPLETED,
      payload: data
    });
  } catch (e) {
    yield put({ type: GET_PARTITIONLAND_FAILED, payload: e.message });
  }
}


export function* getPartitionLandByIdList(request:any) {
  try {
    const { data } = yield call(PArtitionLandAPI.getPartitionLandByIdList, request.id);
    console.log(data);
    yield put({
      type: GET_PARTITIONLANDBYID_COMPLETED,
      payload: data
    });
  } catch (e) {
    yield put({ type: GET_PARTITIONLANDBYID_FAILED, payload: e.message });
  }
}

export function* deletePartirionLand(request : any) {
  try {
    const result = yield call(PArtitionLandAPI.deletePartitionLand, request.id);
    var status = result.data;
    yield put({
      type: DELETE_PARTITIONLAND_COMPLETED,
      payload: result.data,
      input: request
    });

  } catch (e) {
    yield put({ type: DELETE_PARTITIONLAND_FAILED, payload: e.message });
  }
}