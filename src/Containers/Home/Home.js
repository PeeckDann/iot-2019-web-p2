import React, { useState } from 'react';
import {
  Container,
  Heading,
  HeadingImage,
  HeadingParagraph,
  Title,
  Text,
  Showcase,
  Tiles,
  Tile,
  TileImage,
  TileTitle,
  TileText,
  ViewMore,
} from './Home.styled.js';
import HomeHeadingImage from '../Icons/HeadingImage.jpeg';
import HomeTileImage from '../Icons/TileImage.jpeg';
import AdditionalContent from './AdditionalContent.js';

const TileData = [
  {
    image: HomeTileImage,
    title: 'First Tile',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.',
  },
  {
    image: HomeTileImage,
    title: 'Second Tile',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.',
  },
  {
    image: HomeTileImage,
    title: 'Third Tile',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.',
  },
];

const Home = () => {
  const [toggle, setToggle] = useState(false);

  const handleContent = () => setToggle(!toggle);

  return (
    <Container>
      <Heading>
        <HeadingImage src={HomeHeadingImage} alt="Image" />
        <HeadingParagraph>
          <Title>Heading</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae
            maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae
            maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.
          </Text>
        </HeadingParagraph>
      </Heading>
      <Showcase>
        <Tiles>
          {TileData.map((tile, index) => (
            <Tile key={index}>
              <TileImage src={tile.image} alt="Image" />
              <TileTitle>{tile.title}</TileTitle>
              <TileText>{tile.text}</TileText>
            </Tile>
          ))}
        </Tiles>
        {toggle && <AdditionalContent />}
        <ViewMore onClick={handleContent}>{toggle ? 'View Less' : 'View More'}</ViewMore>
      </Showcase>
    </Container>
  );
};

export default Home;
