import React, { useState, useEffect, useCallback } from 'react';

import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collectionOverview/collectionOverview';
import CollectionPage from '../collection/collectionPage';

import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import WithSpinner from '../../components/withSpinner/withSpinner';
import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded
} from '../../redux/shop/shopSelector';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match }) => {
  const unsubscribeFromSnapshot = null;
  const dispatch = useDispatch();

  const isCollectionFetching = useSelector(
    selectIsCollectionFetching,
    shallowEqual
  );
  const isCollectionLoaded = useSelector(
    selectIsCollectionsLoaded,
    shallowEqual
  );

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
        render={props => (
          <CollectionOverviewWithSpinner
            isLoading={isCollectionFetching}
            {...props}
          />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionPageWithSpinner
            isLoading={!isCollectionLoaded}
            {...props}
          />
        )}
      />
    </div>
  );
};

export default ShopPage;
