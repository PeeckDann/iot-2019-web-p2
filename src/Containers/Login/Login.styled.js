import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 2.05% 0;
`;

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 90%;
`;

export const Label = styled.label`
    font-size: 18px;
    color: #000033;
    margin-top: 1.5%;
`;

export const Input = styled.input`
    width: 40%;
    padding: 10px 5px;
    margin-top: 0.5%;
    color: #000033;
    background-color: white;
    border: solid 1px #000033;
    border-radius: 10px;
`;

export const Error = styled.p`
    background-color: #8A0808;
    border: solid 1px #8A0808;
    border-radius: 5px;
    color: white;
    padding: 2px 5px;
    font-size: 14px;
`;

export const BottomText = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    margin: 2% 0;
`;

export const Text = styled.p`
    font-size: 16px;
    color: #000033;
`;

export const Submit = styled.button`
    background-color: #000033;
    font-size: 16px;
    font-weight: bold;
    color: white;
    border: solid 1px #000033;
    border-radius: 5px;
    padding: 8px 17px;
    cursor: pointer;
    &:hover{
        background-color: white;
        color: #000033;
    }
`;