import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #000033;
`;

export const TopPart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 1% 0;
`;

export const Branding = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 25%;
    margin-left: 2%;
`;

export const Title = styled.h1`
    font-size: 20px;
    color: white;
`;

export const Text = styled.p`
    font-size: 14px;
    color: white;
`;

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 12%;
`;

export const ShopName = styled.h1`
    font-size: 30px;
    color: white;
`;

export const ShopLogo = styled.img`
    height: 30px;
`;

export const Socials = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 15%;
    margin-right: 2%;
`;

export const Icon = styled.img`
    height: 30px;
    cursor: pointer;
`;

export const BottomPart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    border-top: solid 2px white;
`;

export const Copyright = styled.p`
    font-size: 12px;
    color: white;
    margin: 2% 0;
`;