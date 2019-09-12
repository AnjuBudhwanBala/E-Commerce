import React from 'react';
import MenuItem from '../menuItem/menuItem';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { directorySection } from '../../redux/directory/directorySelector';
import { DirectoryMenuContainer } from './directory.styles';

export const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: directorySection
});

export default connect(mapStateToProps)(Directory);
