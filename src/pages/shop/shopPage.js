import React, { useState } from 'react';
import SHOP_DATA from './shopData';
import CollectionPreview from '../../components/collectionPreview/collectionPreview';

const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div className="shopPage">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
