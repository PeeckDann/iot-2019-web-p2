import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: #000033;
`;

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 2%;
`;

export const ShopName = styled.h1`
    font-size: 30px;
    color: white;
`;

export const ShopLogo = styled.img`
    height: 30px;
`;

export const NavMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 25%;
    margin-right: 35%;
`;

export const NavLink = styled.param`
    font-size: 20px;
    color: white;
    cursor: pointer;
    padding: 28px 10px 23px;
    &:hover{
        border-bottom: solid 5px #FFCC33;
    }
`;