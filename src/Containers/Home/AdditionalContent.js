import React from 'react';
import { HeadingImage, HeadingParagraph, Title, Text, ContentContainer } from './Home.styled.js';

import HomeContentImage from '../Icons/HomeContentImage.jpeg';

const AdditionalContent = () => (
  <ContentContainer>
    <HeadingParagraph>
      <Title>Additional Info</Title>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores
        nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores nesciunt
        saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.
      </Text>
    </HeadingParagraph>
    <HeadingImage src={HomeContentImage} alt="Image" />
  </ContentContainer>
);

export default AdditionalContent;
