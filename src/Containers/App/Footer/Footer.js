import React from "react";
import {Container, TopPart, BottomPart, LogoContainer, ShopName, ShopLogo, Branding, Socials, Icon, Title, Text, Copyright} from "./Footer.styled.js";
import ShopLogoIcon from "../../Icons/ShopLogo.svg";
import FacebookIcon from "../../Icons/Facebook.svg";
import TwitterIcon from "../../Icons/Twitter.svg";
import LinkedInIcon from "../../Icons/LinkedIn.svg";
import GooglePlusIcon from "../../Icons/GooglePlus.svg";

const Footer = () => {
    return (
        <Container>
            <TopPart>
                <Branding>
                    <Title>Branding</Title>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.</Text>
                </Branding>
            <LogoContainer>
                <ShopLogo src={ShopLogoIcon} alt="Shop Logo"></ShopLogo>
                <ShopName>Shish</ShopName>
            </LogoContainer>
                <Socials>
                    <Icon src={FacebookIcon} alt="Facebook"></Icon>
                    <Icon src={TwitterIcon} alt="Twitter"></Icon>
                    <Icon src={LinkedInIcon} alt="LinkedIn"></Icon>
                    <Icon src={GooglePlusIcon} alt="GooglePlus"></Icon>
                </Socials>
            </TopPart>
            <BottomPart>
                <Copyright>2020 IoT &#169; Copyright all rights reserved UwU</Copyright>
            </BottomPart>
        </Container>
    );
};

export default Footer;