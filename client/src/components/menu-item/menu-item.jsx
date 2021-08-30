import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import {
  BackgroundImageContainer,
  MenuItemContainer,
  ContentContainer,
  TitleContainer,
  SubTitleContainer,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();
  const match = useRouteMatch();
  return (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        className='background-image'
        imageUrl={imageUrl}
      />
      <ContentContainer className='content'>
        <TitleContainer>{title}</TitleContainer>
        <SubTitleContainer>SHOP NOW</SubTitleContainer>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default MenuItem; // withRouter give as access to location history match
