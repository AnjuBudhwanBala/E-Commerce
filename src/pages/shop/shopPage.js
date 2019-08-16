import React, { useState, useEffect, useCallback } from 'react';

import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collectionOverview/collectionOverview';
import CollectionPage from '../collection/collectionPage';
import {
  firestore,
  convertCollectionSnapshotToMap
} from '../../firebase/firebase.utils';

import { useDispatch } from 'react-redux';
import WithSpinner from '../../components/withSpinner/withSpinner';
import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match }) => {
  const [loading, setLoading] = useState(true);

  const unsubscribeFromSnapshot = null;
  const dispatch = useDispatch();

  const dispatchedCollection = useCallback(
    collection => dispatch(updateCollections(collection)),
    [dispatch]
  );
  useEffect(() => {
    //to get shop data from database
    const collectionRef = firestore.collection('collection');
    collectionRef.onSnapshot(async snapshot => {
      const collectionMap = convertCollectionSnapshotToMap(snapshot);
      dispatchedCollection(collectionMap);
      setLoading(false);
    });
  }, []);

  return (
    <div className="shopPage">
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionPageWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
};

export default ShopPage;
