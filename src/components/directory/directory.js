import React from 'react';
import MenuItem from '../menuItems/menuItems';

import { useSelector, shallowEqual } from 'react-redux';
import { directorySection } from '../../redux/directory/directorySelector';
import { DirectoryMenuContainer } from './directory.styles';

const Directory = () => {
  const sections = useSelector(directorySection, shallowEqual);
  console.log(sections, 'sections');
  return (
    <DirectoryMenuContainer>
      {sections.map(section => (
        <MenuItem
          key={section.id}
          title={section.title}
          size={section.size}
          imageUrl={section.imageUrl}
          linkUrl={section.linkUrl}
        />
      ))}
    </DirectoryMenuContainer>
  );
};

export default Directory;
