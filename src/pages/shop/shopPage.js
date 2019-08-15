import React, { useState, useEffect, useCallback } from 'react';

import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collectionOverview/collectionOverview';
import CollectionPage from '../collection/collectionPage';
import {
  firestore,
  convertCollectionSnapshotToMap
} from '../../firebase/firebase.utils';

import { useDispatch } from 'react-redux';

import { updateCollections } from '../../redux/shop/shop.actions';

const ShopPage = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const unsubscribeFromSnapshot = null;
  const dispatch = useDispatch();

  const updatedCollection = useCallback(
    collection => dispatch(updateCollections(collection)),
    [dispatch]
  );

  useEffect(() => {
    //to get shop data from database
    const collectionRef = firestore.collection('collection');
    collectionRef.onSnapshot(async snapshot => {
      const collectionMap = convertCollectionSnapshotToMap(snapshot);
      updatedCollection(collectionMap);
    });
  }, [updatedCollection]);

  return (
    <div className="shopPage">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
