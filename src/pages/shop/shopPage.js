import React, { useEffect, useCallback } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';
import CollectionOverviewContainer from '../../components/collectionOverview/collectionOverviewContainer';
import CollectionPageContainer from '../collection/collectionPageContainer';

const ShopPage = ({ match }) => {
  const unsubscribeFromSnapshot = null;
  const dispatch = useDispatch();

  const fetchAsyncCollection = useCallback(
    () => dispatch(fetchCollectionStartAsync()),
    [dispatch]
  );
  useEffect(() => {
    //to get shop data from database
    fetchAsyncCollection();
  }, [fetchAsyncCollection]);

  return (
    <div className="shopPage">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

export default ShopPage;
