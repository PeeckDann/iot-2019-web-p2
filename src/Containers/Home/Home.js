import React, {useState} from "react";
import {Container, Heading, HeadingImage, HeadingParagraph, Title, Text, Showcase, Tiles, Tile, TileImage, TileTitle, TileText, ViewMore, ContentContainer} from "./Home.styled.js";
import HomeHeadingImage from "../Icons/HeadingImage.jpeg";
import HomeTileImage from "../Icons/TileImage.jpeg";
import HomeContentImage from "../Icons/HomeContentImage.jpeg";


const Home = () => {

    const [toggle, setToggle] = useState(false);

    function handleContent(){
        if (toggle == false) setToggle(true);
        if (toggle == true) setToggle(false);
    }

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
                {toggle && <MoreContent/>}
                <ViewMore onClick={() => (handleContent())}>{toggle ? "View Less" : "View More"}</ViewMore>
            </Showcase>
        </Container>
    );
};

const MoreContent = () => {
    return (
        <ContentContainer>
            <HeadingParagraph>
                    <Title>Additional Info</Title>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.</Text>
            </HeadingParagraph>
            <HeadingImage src={HomeContentImage} alt="Image"></HeadingImage>
        </ContentContainer>
    );
};

export default Home;