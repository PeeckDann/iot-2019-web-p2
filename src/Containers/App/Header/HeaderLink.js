import React from 'react';
import { NavLink } from './Header.styled.js';
import { Link } from 'react-router-dom';

const HeaderLink = ({ to, children }) => (
  <Link to={to}>
    <NavLink>{children}</NavLink>
  </Link>
);

export default HeaderLink;
