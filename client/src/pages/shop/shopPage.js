import React, { useEffect, useCallback, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCollectionStart } from '../../redux/shop/shop.actions';
import Spinner from '../../components/spinner/spinner';

const CollectionOverviewContainer = lazy(() =>
  import('../../components/collectionOverview/collectionsOverviewContainer')
);

const CollectionPageContainer = lazy(() =>
  import('../collection/collectionPageContainer')
);
const ShopPage = ({ match }) => {
  // const unsubscribeFromSnapshot = null;
  const dispatch = useDispatch();

  const fetchAsyncCollection = useCallback(
    () => dispatch(fetchCollectionStart()),
    [dispatch]
  );
  useEffect(() => {
    //to get shop data from database
    fetchAsyncCollection();
  }, [fetchAsyncCollection]);

  return (
    <div className="shopPage">
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};

export default ShopPage;
