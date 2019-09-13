import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collectionItem/collectionItem';

import { selectCollection } from '../../redux/shop/shopSelector';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collectionPage.styles';

export const CollectionPage = ({ collection }) => {
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

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
