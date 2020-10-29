import { put, CallEffect, call } from "redux-saga/effects";
import {
  STORE_LANDDETAIL_COMPLETED, STORE_LANDDETAIL_FAILED, GET_LANDDETAIL_COMPLETED, GET_LANDDETAIL_FAILED,
  DELETE_LANDDETAIL_COMPLETED, DELETE_LANDDETAIL_FAILED, GET_LANDDETAIBYID_COMPLETED, GET_LANDDETAILBYID_FAILED
  
}
  from '../../actions/LandDetail';

import { LandDetailsAPI } from '../../../utils/api/LandDetailsAPI';

export function* storeLandDetailData(request: any) {
  try {   
    const { data } = yield call(LandDetailsAPI.addLandDetails, request.input);
    console.log(data);
    yield put({
      type: STORE_LANDDETAIL_COMPLETED,
      input: request.input,
      payload: data
    });

  } catch (e) {
    yield put({ type: STORE_LANDDETAIL_FAILED, payload: e.message });
  }
}

export function* getLandDetailList() {
  try {
    const { data } = yield call(LandDetailsAPI.getLandDetailsList);
    console.log(data);
    yield put({
      type: GET_LANDDETAIL_COMPLETED,
      payload: data
    });
  } catch (e) {
    yield put({ type: GET_LANDDETAIL_FAILED, payload: e.message });
  }
}

export function* getLandByIdList(request: any) {
  try {
    const { data } = yield call(LandDetailsAPI.getLandDetailByIdList, request.id);
    console.log(data);
    yield put({
      type: GET_LANDDETAIBYID_COMPLETED,
      payload: data
    });
  } catch (e) {
    yield put({ type: GET_LANDDETAILBYID_FAILED, payload: e.message });
  }
}

export function* deleteLand(request: any) {
  try {
    const result = yield call(LandDetailsAPI.deleteLand, request.id);
    var status = result.data;
    yield put({
      type: DELETE_LANDDETAIL_COMPLETED,
      payload: result.data,
      input: request
    });

  } catch (e) {
    yield put({ type: DELETE_LANDDETAIL_FAILED, payload: e.message });
  }
}