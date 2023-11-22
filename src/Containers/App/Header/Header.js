import React from 'react';
import { Container, LogoContainer, ShopName, ShopLogo, NavMenu } from './Header.styled.js';
import ShopLogoIcon from '../../Icons/ShopLogo.svg';
import HeaderLink from './HeaderLink.js';

const Header = () => (
  <Container>
    <LogoContainer>
      <ShopLogo src={ShopLogoIcon} alt="Shop Logo" />
      <ShopName>Shish</ShopName>
    </LogoContainer>
    <NavMenu>
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/catalog">Catalog</HeaderLink>
      <HeaderLink to="/cart">Cart</HeaderLink>
    </NavMenu>
  </Container>
);

export default Header;
