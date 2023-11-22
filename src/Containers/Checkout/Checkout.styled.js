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
  margin: 4% 0 1.5% 0;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5% 0 5% 0;
  width: 30%;
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
  &:hover {
    background-color: white;
    color: #000033;
  }
`;

export const GoBack = styled.button`
  background-color: white;
  font-size: 16px;
  font-weight: bold;
  color: #000033;
  border: solid 1px #000033;
  border-radius: 5px;
  padding: 8px 17px;
  cursor: pointer;
  &:hover {
    background-color: #000033;
    color: white;
  }
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
  background-color: #8a0808;
  border: solid 1px #8a0808;
  border-radius: 5px;
  color: white;
  padding: 2px 5px;
  font-size: 14px;
`;
