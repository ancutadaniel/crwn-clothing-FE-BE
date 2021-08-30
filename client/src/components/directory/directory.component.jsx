import React from 'react';
import { useSelector } from 'react-redux';
import { selectSections } from '../../redux/directory-redux/directory.selector';
import MenuItem from '../menu-item/menu-item';

import { DirectoryMenuContainer } from './directory.styles';

const Directory = () => {
  const sections = useSelector(selectSections);
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </DirectoryMenuContainer>
  );
};

export default Directory;
