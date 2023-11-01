import React from 'react';
import { Container, LogoContainer, ShopName, ShopLogo, NavMenu, NavLink } from './Header.styled.js';
import { Link } from 'react-router-dom';
import ShopLogoIcon from '../../Icons/ShopLogo.svg';

const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <ShopLogo src={ShopLogoIcon} alt="Shop Logo"></ShopLogo>
        <ShopName>Shish</ShopName>
      </LogoContainer>
      <NavMenu>
        <Link to="/">
          <NavLink>Home</NavLink>
        </Link>
        <Link to="/catalog">
          <NavLink>Catalog</NavLink>
        </Link>
        <Link to="/cart">
          <NavLink>Cart</NavLink>
        </Link>
      </NavMenu>
    </Container>
  );
};

export default Header;
