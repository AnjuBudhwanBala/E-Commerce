import React from 'react';

import { useSelector, shallowEqual } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shopSelector';
import CollectionPreview from '../collectionPreview/collectionPreview';
import { CollectionsOverviewContainer } from './collectionOverview.styles';

const CollectionOverview = () => {
  const collections = useSelector(selectCollectionsForPreview, shallowEqual);
  console.log(collections);
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );
};

export default CollectionOverview;
