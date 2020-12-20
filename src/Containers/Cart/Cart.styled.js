import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 288px;
`;

export const Heading = styled.h1`
    font-size: 30px;
    color: #000033;
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
`;

export const Name = styled.p`
    font-size: 20px;
    color: #000033;
`;

export const Counter = styled.button`

`;

export const Number = styled.p`
    font-size: 16px;
    color: #000033;
`;

export const Delete = styled.button`

`;

export const Price = styled.p`
    font-size: 16px;
    color: #000033;
`;

export const TotalPrice = styled.h1`
    font-size: 16px;
    font-weight: bold;
    color: #000033;
`;

export const BottomButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
    &:hover{
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
    &:hover{
        background-color: white;
        color: #000033;
    }
`;