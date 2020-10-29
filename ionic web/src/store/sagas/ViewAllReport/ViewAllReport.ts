import { put, CallEffect, call } from "redux-saga/effects";
import {
  GET_VIEWALLREPORT_COMPLETED,GET_VIEWALLREPORT_FAILED
 }
  from '../../actions/ViewAllReport';
import { ViewAllReportAPI } from "../../../utils/api/ViewAllReport";


export function* getViewAllReportList() {
  try {
    const { data } = yield call(ViewAllReportAPI.getViewAllReportLists);
    console.log(data);
    yield put({
      type: GET_VIEWALLREPORT_COMPLETED,
      payload: data
    });
  } catch (e) {
    yield put({ type: GET_VIEWALLREPORT_FAILED, payload: e.message });
  }
}

