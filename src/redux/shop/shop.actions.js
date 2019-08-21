import * as actionTypes from '../actionTypes';
import {
  firestore,
  convertCollectionSnapshotToMap
} from '../../firebase/firebase.utils';

export const fetchCollectionStart = () => ({
  type: actionTypes.FETCH_COLLECTION_START
});

export const fetchCollectionSuccess = collectionMap => ({
  type: actionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionMap
});

export const fetchCollectionFailure = collectionMap => ({
  type: actionTypes.FETCH_COLLECTION_FAILURE,
  payload: collectionMap
});

export const fetchCollectionStartAsync = collectionMap => {
  return dispatch => {
    const collectionRef = firestore.collection('collection');
    //fetch Collection start here
    dispatch(fetchCollectionStart());
    collectionRef
      .get()
      .then(snapshot => {
        const collectionMap = convertCollectionSnapshotToMap(snapshot);
        dispatch(fetchCollectionSuccess(collectionMap));
      })
      .catch(error => dispatch(fetchCollectionFailure(error)));
  };
};
