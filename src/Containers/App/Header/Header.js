import React from "react";
import {Container, LogoContainer, ShopName, ShopLogo, NavMenu, NavLink, SingOut} from "./Header.styled.js";
import {Link} from "react-router-dom";
import ShopLogoIcon from "../../Icons/ShopLogo.svg";
import {useDispatch} from "react-redux";
import {signedOut} from "../../../Store/Actions/Actions.js";
import {useHistory} from "react-router-dom";

const Header = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const signOut = () => {
        dispatch(signedOut());
        history.push('/login');
    }

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
            <SingOut onClick={() => signOut()}>Sign Out</SingOut>
        </Container>
    );
};

export default Header;