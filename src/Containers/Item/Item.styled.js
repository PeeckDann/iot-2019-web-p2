import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 3% 0 5% 0;
`;

export const ProductSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding: 0 1% 5% 1%;
  border-bottom: solid 3px #000033;
`;

export const ProductImage = styled.img`
  width: 35%;
  border-radius: 10px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 60%;
`;

export const Characteristics = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Country = styled.div`
  background-color: #000033;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 20px;
  border-radius: 10px;
  margin-right: 1.5em;
`;

export const Type = styled.div`
  background-color: #3399ff;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 20px;
  border-radius: 10px;
`;

export const ProductName = styled.h1`
  font-size: 25px;
  color: #000033;
  margin: 6% 0 2% 0;
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  color: #000033;
`;

export const BuyOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 88%;
  margin-top: 6%;
`;

export const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #000033;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 20%;
`;

export const GoBack = styled.button`
  background-color: white;
  font-size: 16px;
  font-weight: bold;
  color: #000033;
  border: solid 1px #000033;
  border-radius: 5px;
  padding: 7px 15px;
  cursor: pointer;
  &:hover {
    background-color: #000033;
    color: white;
  }
`;

export const AddToCart = styled.button`
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
