import React from 'react';
import './collectionItem.styles.scss';

const CollectionItem = ({ imageUrl, price, name }) => {
  return (
    <div className="collectionItem">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
