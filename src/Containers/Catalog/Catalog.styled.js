import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex: 1;
`;

export const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 4%;
  width: 100%;
  flex: 1;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: solid 1px #000033;
  border-radius: 10px;
  padding: 15px 0;
  margin-left: 4%;
  margin-bottom: 4%;
  width: 20%;
  &::nth-child(4n) {
    background-color: white;
  }
`;

export const ProductImage = styled.img`
  width: 85%;
  border-radius: 10px;
`;

export const ProductName = styled.h1`
  font-size: 20px;
  color: #000033;
  margin-top: 30px;
  margin-bottom: -5px;
`;

export const ProductDescription = styled.p`
  text-align: center;
  font-size: 14px;
  color: #000033;
  margin-bottom: 40px;
  width: 70%;
`;

export const ProductPrice = styled.div`
  font-size: 16px;
  color: #000033;
  margin-bottom: 10px;
`;

export const ViewMore = styled.button`
  background-color: #000033;
  font-size: 14px;
  font-weight: bold;
  color: white;
  border: solid 1px #000033;
  border-radius: 5px;
  padding: 6px 60px;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #000033;
  }
`;
