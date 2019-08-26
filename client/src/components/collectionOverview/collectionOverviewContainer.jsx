//import { compose } from 'redux';
import { connect } from 'react-redux';

import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shopSelector';
import WithSpinner from '../withSpinner/withSpinner';
import CollectionOverview from '../collectionOverview/collectionOverview';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionsOverviewContainer;
