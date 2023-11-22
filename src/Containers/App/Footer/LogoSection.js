import React from 'react';
import { LogoContainer, ShopName, ShopLogo } from './Footer.styled.js';
import ShopLogoIcon from '../../Icons/ShopLogo.svg';

const LogoSection = () => (
  <LogoContainer>
    <ShopLogo src={ShopLogoIcon} alt="Shop Logo" />
    <ShopName>Shish</ShopName>
  </LogoContainer>
);

export default LogoSection;
