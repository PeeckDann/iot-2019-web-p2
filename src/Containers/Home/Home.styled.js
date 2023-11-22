import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 5% 0;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-bottom: 10%;
`;

export const HeadingImage = styled.img`
  width: 40%;
  border-radius: 10px;
`;

export const HeadingParagraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 50%;
`;

export const Title = styled.h1`
  font-size: 25px;
  color: #000033;
`;

export const Text = styled.p`
  font-size: 16px;
  color: #000033;
`;

export const Showcase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Tiles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 3%;
`;

export const Tile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30%;
`;

export const TileImage = styled.img`
  width: 75%;
  border-radius: 10px;
`;

export const TileTitle = styled.h1`
  font-size: 20px;
  color: #000033;
`;

export const TileText = styled.p`
  text-align: center;
  font-size: 14px;
  color: #000033;
  width: 70%;
`;

export const ViewMore = styled.button`
  background-color: #000033;
  font-size: 16px;
  font-weight: bold;
  color: white;
  border: solid 1px #000033;
  border-radius: 5px;
  padding: 7px 15px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #000033;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-bottom: 6%;
  margin-top: 6%;
`;
