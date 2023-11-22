import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Heading = styled.h1`
  font-size: 30px;
  color: #000033;
  margin: 4% 0 3% 0;
`;

export const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: solid 1px #000033;
  border-radius: 10px;
  padding: 5px;
  width: 90%;
  margin-bottom: 1%;
`;

export const Image = styled.img`
  width: 15%;
  border-radius: 10px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #000033;
  margin-right: 30%;
`;

export const Quantity = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 10%;
  margin-right: 5%;
`;

export const Counter = styled.button`
  background-color: white;
  color: #000033;
  padding: 3px 10px 4px 10px;
  border: solid 1px #000033;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #000033;
    color: white;
  }
`;

export const Number = styled.p`
  font-size: 16px;
  color: #000033;
`;

export const Price = styled.p`
  font-size: 16px;
  color: #000033;
  margin-right: 10%;
`;

export const Delete = styled.button`
  background-color: #8a0808;
  color: white;
  padding: 3px 10px 4px 10px;
  border: solid 1px #8a0808;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 3%;
  &:hover {
    background-color: #3b0b0b;
  }
`;

export const TotalPrice = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #000033;
  margin: 2% 0 5% 0;
`;

export const BottomButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5%;
  width: 80%;
`;

export const ToCatalog = styled.button`
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

export const Continue = styled.button`
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

export const Empty = styled.p`
  font-size: 25px;
  color: #8a0808;
`;
