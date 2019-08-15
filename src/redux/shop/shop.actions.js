import * as actionTypes from '../actionTypes';

export const updateCollections = collectionMap => ({
  type: actionTypes.UPDATE_COLLECTION,
  payload: collectionMap
});
