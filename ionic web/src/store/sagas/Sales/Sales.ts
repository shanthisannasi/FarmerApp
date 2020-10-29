import { put, CallEffect, call } from "redux-saga/effects";
import {
  STORE_SALES_COMPLETED, STORE_SALES_FAILED,
  GET_SALESBYID_COMPLETED, GET_SALESBYID_FAILED,
  GET_SALES_COMPLETED, GET_SALES_FAILED,
  DELETE_SALES_COMPLETED, DELETE_SALES_FAILED
}
  from '../../actions/Sales';
import { SaleAPI } from "../../../utils/api/SaleAPI";

export function* storeSaleData(request: any) {
  try {
    const { data } = yield call(SaleAPI.addSale, request.input);
    console.log(data);
    yield put({
      type: STORE_SALES_COMPLETED,
      input: request.input,
    });

  } catch (e) {
    yield put({ type: STORE_SALES_FAILED, payload: e.message });
  }
}

export function* getSaleList() {
  try {
    const { data } = yield call(SaleAPI.getSaleList);
    console.log(data);
    yield put({
      type: GET_SALES_COMPLETED,
      payload: data
    });
  } catch (e) {
    yield put({ type: GET_SALES_FAILED, payload: e.message });
  }
}

export function* getSaleByIdList(request: any) {
  try {
    const { data } = yield call(SaleAPI.getSaleByIdList, request.id);
    console.log(data);
    yield put({
      type: GET_SALESBYID_COMPLETED,
      payload: data
    });
  } catch (e) {
    yield put({ type: GET_SALESBYID_FAILED, payload: e.message });
  }
}

export function* deleteSale(request: any) {
  try {
    const result = yield call(SaleAPI.deleteSale, request.id);
    var status = result.data;
    yield put({
      type: DELETE_SALES_COMPLETED,
      payload: result.data,
      input: request
    });

  } catch (e) {
    yield put({ type: DELETE_SALES_FAILED, payload: e.message });
  }
}