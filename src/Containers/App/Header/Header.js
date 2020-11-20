import React from "react";
import {Container, LogoContainer, ShopName, ShopLogo, NavMenu, NavLink, SingUp} from "./Header.styled.js";
import ShopLogoIcon from "../../Icons/ShopLogo.svg";

const Header = () => {
    return (
        <Container>
            <LogoContainer>
                <ShopLogo src={ShopLogoIcon} alt="Shop Logo"></ShopLogo>
                <ShopName>Shish</ShopName>
            </LogoContainer>
            <NavMenu>
                <NavLink>Home</NavLink>
                <NavLink>Products</NavLink>
                <NavLink>Cart</NavLink>
            </NavMenu>
        </Container>
    );
};

export default Header;