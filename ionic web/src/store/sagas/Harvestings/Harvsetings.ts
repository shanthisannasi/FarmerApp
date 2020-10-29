import { put, CallEffect, call } from "redux-saga/effects";
import {
  STORE_HARVESTINGS_COMPLETED, STORE_HARVESTINGS_FAILED,
  GET_HARVESTINGSBYID_COMPLETED, GET_HARVESTINGSBYID_FAILED,
  GET_HARVESTINGS_COMPLETED, GET_HARVESTINGS_FAILED,
  DELETE_HARVESTINGS_COMPLETED, DELETE_HARVESTINGS_FAILED,
 }
  from '../../actions/Harvestings';
import { HarvestingAPI } from "../../../utils/api/HarvestingAPI";

export function* storeHarvestData(request: any) {
  try {
    const { data } = yield call(HarvestingAPI.addHarvesting, request.input);
    console.log(data);
    yield put({
      type: STORE_HARVESTINGS_COMPLETED,     
      payload: data,    
    });

  } catch (e) {
    yield put({ type: STORE_HARVESTINGS_FAILED, payload: e.message });
  }
}

export function* getHarvestList() {
  try {
    const { data } = yield call(HarvestingAPI.getHarvestList);
    console.log(data);
    yield put({
      type: GET_HARVESTINGS_COMPLETED,
      payload: data
    });
  } catch (e) {
    yield put({ type: GET_HARVESTINGS_FAILED, payload: e.message });
  }
}

export function* getHarvestByIdList(request: any) {
  try {
    const { data } = yield call(HarvestingAPI.getHarvestByIdList, request.id);
    console.log(data);
    yield put({
      type: GET_HARVESTINGSBYID_COMPLETED,
      payload: data
    });
  } catch (e) {
    yield put({ type: GET_HARVESTINGSBYID_FAILED, payload: e.message });
  }
}

export function* deleteHarvest(request: any) {
  try {
    const result = yield call(HarvestingAPI.deleteHarvest, request.id);
    var status = result.data;
    yield put({
      type: DELETE_HARVESTINGS_COMPLETED,
      payload: result.data,
      input: request
    });

  } catch (e) {
    yield put({ type: DELETE_HARVESTINGS_FAILED, payload: e.message });
  }
}