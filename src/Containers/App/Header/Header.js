import React from 'react';
import { Container, LogoContainer, ShopName, ShopLogo, NavMenu, NavLink } from './Header.styled.js';
import { Link } from 'react-router-dom';
import ShopLogoIcon from '../../Icons/ShopLogo.svg';

const HeaderLink = ({ to, children }) => (
  <Link to={to}>
    <NavLink>{children}</NavLink>
  </Link>
);

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
