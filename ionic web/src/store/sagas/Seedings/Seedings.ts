import { put, CallEffect, call } from "redux-saga/effects";
import {
  STORE_SEEDINGS_COMPLETED, STORE_SEEDINGS_FAILED,
  GET_SEEDINGBYID_COMPLETED, GET_SEEDINGBYID_FAILED,
  GET_SEEDING_COMPLETED, GET_SEEDING_FAILED,
  DELETE_SEEDING_COMPLETED, DELETE_SEEDING_FAILED
}
  from '../../actions/Seedings';
import { SeedingAPI } from "../../../utils/api/SeedingAPI";

export function* storeSeedData(request: any) {
  try {
    const { data } = yield call(SeedingAPI.addSeed, request.input);
    console.log(data);
    yield put({
      type: STORE_SEEDINGS_COMPLETED,
      input: request.input,
      payload: data
    });

  } catch (e) {
    yield put({ type: STORE_SEEDINGS_FAILED, payload: e.message });
  }
}

export function* getSeedList() {
  try {
    const { data } = yield call(SeedingAPI.getSeedList);
    console.log(data);
    yield put({
      type: GET_SEEDING_COMPLETED,
      payload: data
    });
  } catch (e) {
    yield put({ type: GET_SEEDING_FAILED, payload: e.message });
  }
}

export function* getSeedByIdList(request: any) {
  try {
    const { data } = yield call(SeedingAPI.getSeedByIdList, request.id);
    console.log(data);
    yield put({
      type: GET_SEEDINGBYID_COMPLETED,
      payload: data
    });
  } catch (e) {
    yield put({ type: GET_SEEDINGBYID_FAILED, payload: e.message });
  }
}

export function* deleteSeed(request: any) {
  try {
    const result = yield call(SeedingAPI.deleteSeed, request.id);
    var status = result.data;
    yield put({
      type: DELETE_SEEDING_COMPLETED,
      payload: result.data,
      input: request
    });

  } catch (e) {
    yield put({ type: DELETE_SEEDING_FAILED, payload: e.message });
  }
}