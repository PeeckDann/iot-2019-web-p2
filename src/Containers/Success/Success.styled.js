import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const Image = styled.img`
    width: 15%;
    margin-top: 5%;
`;

export const Heading = styled.h1`
    font-size: 30px;
    color: #000033;
    margin: 3% 0 1% 0;
`;

export const Message = styled.p`
    text-align: center;
    font-size: 18px;
    color: #000033;
    width: 30%;
`;

export const Goback = styled.button`
    margin: 20% 0 50% 0;
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
