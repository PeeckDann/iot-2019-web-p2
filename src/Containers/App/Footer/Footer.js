import React from 'react';
import { Container, TopPart, BottomPart, Copyright } from './Footer.styled.js';
import LogoSection from './LogoSection.js';
import SocialsSection from './SocialsSection.js';
import BrandingSection from './BrandingSection.js';

const Footer = () => (
  <Container>
    <TopPart>
      <BrandingSection />
      <LogoSection />
      <SocialsSection />
    </TopPart>
    <BottomPart>
      <Copyright>2020 IoT &#169; Copyright all rights reserved UwU</Copyright>
    </BottomPart>
  </Container>
);

export default Footer;
