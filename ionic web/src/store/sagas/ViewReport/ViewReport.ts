import { put, CallEffect, call } from "redux-saga/effects";
import {
  GET_VIEWREPORT_COMPLETED,GET_VIEWREPORT_FAILED
 }
  from '../../actions/ViewReport';
import { ViewReportAPI } from "../../../utils/api/ViewReport";


export function* getViewReportList(request: any) {
  try {
    const { data } = yield call(ViewReportAPI.getViewReportLists, request.id);
    console.log(data);
    yield put({
      type: GET_VIEWREPORT_COMPLETED,
      payload: data
    });
  } catch (e) {
    yield put({ type: GET_VIEWREPORT_FAILED, payload: e.message });
  }
}

