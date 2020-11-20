import React from "react";
import {Container, Heading, HeadingImage, HeadingParagraph, Title, Text, Showcase, Tiles, Tile, TileImage, TileTitle, TileText, ViewMore} from "./Home.styled.js";
import HomeHeadingImage from "../Icons/HeadingImage.jpeg";
import HomeTileImage from "../Icons/TileImage.jpeg";

const Home = () => {
    return (
        <Container>
            <Heading>
                <HeadingImage src={HomeHeadingImage} alt="Image"></HeadingImage>
                <HeadingParagraph>
                    <Title>Heading</Title>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.</Text>
                </HeadingParagraph>
            </Heading>
            <Showcase>
                <Tiles>
                    <Tile>
                        <TileImage src={HomeTileImage} alt="Image"></TileImage>
                        <TileTitle>First Tile</TileTitle>
                        <TileText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.</TileText>
                    </Tile>
                    <Tile>
                        <TileImage src={HomeTileImage} alt="Image"></TileImage>
                        <TileTitle>Second Tile</TileTitle>
                        <TileText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.</TileText>
                    </Tile>
                    <Tile>
                        <TileImage src={HomeTileImage} alt="Image"></TileImage>
                        <TileTitle>Third Tile</TileTitle>
                        <TileText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.</TileText>
                    </Tile>
                </Tiles>
                <ViewMore>View More</ViewMore>
            </Showcase>
        </Container>
    );
};

export default Home;