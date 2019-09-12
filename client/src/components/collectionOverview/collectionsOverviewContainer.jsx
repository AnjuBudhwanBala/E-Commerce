//import { compose } from 'redux';
import { connect } from 'react-redux';

import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shopSelector';
import WithSpinner from '../withSpinner/withSpinner';
import CollectionsOverview from '../collectionOverview/collectionsOverview';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionOverviewContainer;
