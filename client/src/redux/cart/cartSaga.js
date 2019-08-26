import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as actionTypes from '../actionTypes';
import { clearCart } from './cart.actions';

export function* clearCartSignOut() {
  yield put(clearCart());
}

export function* onSignoutSuccess() {
  yield takeLatest(actionTypes.SIGN_OUT_SUCCESS, clearCartSignOut);
}

export function* cartSaga() {
  yield all([call(onSignoutSuccess)]);
}
