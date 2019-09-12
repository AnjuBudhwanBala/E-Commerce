import React from 'react';

import CollectionItem from '../collectionItem/collectionItem';
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './collectionPreview.styles';
import { withRouter } from 'react-router-dom';

export const CollectionPreview = ({
  title,
  items,
  history,
  match,
  routerName
}) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer
        onClick={() => history.push(`${match.path}/${routerName}`)}
      >
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);
