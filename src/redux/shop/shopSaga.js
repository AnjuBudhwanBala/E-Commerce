import { takeEvery, call, put, all } from 'redux-saga/effects';
import * as actionTypes from '../actionTypes';
import {
  firestore,
  convertCollectionSnapshotToMap
} from '../../firebase/firebase.utils';
import { fetchCollectionSuccess, fetchCollectionFailure } from './shop.actions';

export function* fetchCollectionAsync() {
  yield console.log('I am fired');

  try {
    const collectionRef = firestore.collection('collection');
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeEvery(actionTypes.FETCH_COLLECTION_START, fetchCollectionAsync);
}

export function* shopSaga() {
  yield all([call(fetchCollectionStart)]);
}
