import React from 'react';
import './collectionPreview.styles.scss';
import CollectionItem from '../collectionItem/collectionItem';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collectionPreview">
      <h1>{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherItemsProps }) => (
            <CollectionItem key={id} {...otherItemsProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
