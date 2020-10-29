import { put, CallEffect, call } from "redux-saga/effects";
import {
  GET_STATELIST_COMPLETED, GET_STATELIST_FAILED
}
  from '../../actions/StateList';

import { StateListAPI } from '../../../utils/api/StateListAPI';

export function* getStateList() {
  try {
    const { data } = yield call(StateListAPI.getStateList);
    console.log(data);
    yield put({
      type: GET_STATELIST_COMPLETED,
      payload: data
    });
  } catch (e) {
    yield put({ type: GET_STATELIST_FAILED, payload: e.message });
  }
}