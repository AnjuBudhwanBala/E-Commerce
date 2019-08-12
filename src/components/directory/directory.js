import React from 'react';
import MenuItem from '../menu-items/menu-items';
import './directory.styles.scss';
import { useSelector, shallowEqual } from 'react-redux';
import { directorySection } from '../../redux/directory/directorySelector';

const Directory = () => {
  const sections = useSelector(directorySection, shallowEqual);
  return (
    <div className="directory-menu">
      {sections.map(section => (
        <MenuItem
          key={section.id}
          title={section.title}
          size={section.size}
          imageUrl={section.imageUrl}
        />
      ))}
    </div>
  );
};

export default Directory;
