import React from 'react';
import './collectionOverview.styles.scss';
import { useSelector, shallowEqual } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shopSelector';
import CollectionPreview from '../collectionPreview/collectionPreview';

const CollectionOverview = () => {
  const collections = useSelector(selectCollectionsForPreview, shallowEqual);
  console.log(collections);
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionOverview;
