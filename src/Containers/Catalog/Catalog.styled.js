import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const FilterMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: #000033;
    border-top: solid 1.5px #FFCC33;
`;

export const Label = styled.h1`
    font-size: 16px;
    color: white;
    margin-left: 10%;
`;

export const Filters = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 20%;
`;

export const Select = styled.select`
    background-color: #000033;
    color: white;
    border: solid 1px white;
    border-radius: 5px;
    padding: 7px 25px;
    &:after{
        content: "";
        top: 14px;
        right: 10px;
        width: 0;
        height: 0;
        border: 6px solid transparent;
        border-color: #fff transparent transparent transparent;
    }
`;

export const Search = styled.input`
    background-color: #000033;
    color: white;
    border: solid 1px white;
    border-radius: 5px;
    padding: 8px 25px;
    margin-left: 20%;
`;

export const Apply = styled.button`
    background-color: #000033;
    font-size: 14px;
    font-weight: bold;
    color: white;
    border: solid 1px white;
    border-radius: 5px;
    padding: 7px 25px;
    margin-right: 10%;
    &:hover{
        background-color: white;
        color: #000033;
    }
`;

export const Products = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 4%;
    width: 100%;
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
    height: 40%;
    &::nth-child(4n){
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
    &:hover{
        background-color: white;
        color: #000033;
    }
`;