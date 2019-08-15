import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collectionOverview/collectionOverview';
import CollectionPage from '../collection/collectionPage';
import {
  firestore,
  convertCollectionSnapshotToMap
} from '../../firebase/firebase.utils';

const ShopPage = ({ match }) => {
  const unsubscribeFromSnapshot = null;

  useEffect(() => {
    //to get shop data from database
    const collectionRef = firestore.collection('collection');
    collectionRef.onSnapshot(async snapshot => {
      convertCollectionSnapshotToMap(snapshot);
    });
  }, []);

  return (
    <div className="shopPage">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
