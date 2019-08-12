import React from 'react';
import './collectionPage.styles.scss';
import CollectionItem from '../../components/collectionItem/collectionItem';
import { useSelector } from 'react-redux';
import { selectCollection } from '../../redux/shop/shopSelector';

const CollectionPage = ({ match }) => {
  const collection = useSelector(state =>
    selectCollection(match.params.collectionId)(state)
  );

  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
