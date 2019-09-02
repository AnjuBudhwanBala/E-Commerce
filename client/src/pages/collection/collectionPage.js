import React from 'react';

import CollectionItem from '../../components/collectionItem/collectionItem';
import { useSelector } from 'react-redux';
import { selectCollection } from '../../redux/shop/shopSelector';
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collectionPage.styles';

const CollectionPage = ({ match }) => {
  const collection = useSelector(state =>
    selectCollection(match.params.collectionId)(state)
  );

  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

export default CollectionPage;
