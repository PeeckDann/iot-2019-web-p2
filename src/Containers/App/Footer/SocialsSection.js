import React from 'react';
import { Socials, Icon } from './Footer.styled.js';
import FacebookIcon from '../../Icons/Facebook.svg';
import TwitterIcon from '../../Icons/Twitter.svg';
import LinkedInIcon from '../../Icons/LinkedIn.svg';
import GooglePlusIcon from '../../Icons/GooglePlus.svg';

const SocialsSection = () => (
  <Socials>
    <Icon src={FacebookIcon} alt="Facebook" />
    <Icon src={TwitterIcon} alt="Twitter" />
    <a href="https://www.linkedin.com/in/marian-kit/">
      <Icon src={LinkedInIcon} alt="LinkedIn" />
    </a>
    <Icon src={GooglePlusIcon} alt="GooglePlus" />
  </Socials>
);

export default SocialsSection;
