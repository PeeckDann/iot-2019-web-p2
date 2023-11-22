import React from 'react';
import {
  Container,
  TopPart,
  BottomPart,
  LogoContainer,
  ShopName,
  ShopLogo,
  Branding,
  Socials,
  Icon,
  Title,
  Text,
  Copyright,
} from './Footer.styled.js';
import ShopLogoIcon from '../../Icons/ShopLogo.svg';
import FacebookIcon from '../../Icons/Facebook.svg';
import TwitterIcon from '../../Icons/Twitter.svg';
import LinkedInIcon from '../../Icons/LinkedIn.svg';
import GooglePlusIcon from '../../Icons/GooglePlus.svg';

const BrandingSection = () => (
  <Branding>
    <Title>Branding</Title>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores
      nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.
    </Text>
  </Branding>
);

const LogoSection = () => (
  <LogoContainer>
    <ShopLogo src={ShopLogoIcon} alt="Shop Logo" />
    <ShopName>Shish</ShopName>
  </LogoContainer>
);

const SocialIcons = () => (
  <Socials>
    <Icon src={FacebookIcon} alt="Facebook" />
    <Icon src={TwitterIcon} alt="Twitter" />
    <a href="https://www.linkedin.com/in/marian-kit/">
      <Icon src={LinkedInIcon} alt="LinkedIn" />
    </a>
    <Icon src={GooglePlusIcon} alt="GooglePlus" />
  </Socials>
);

const Footer = () => (
  <Container>
    <TopPart>
      <BrandingSection />
      <LogoSection />
      <SocialIcons />
    </TopPart>
    <BottomPart>
      <Copyright>2020 IoT &#169; Copyright all rights reserved UwU</Copyright>
    </BottomPart>
  </Container>
);

export default Footer;
