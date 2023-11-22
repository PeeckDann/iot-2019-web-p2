import styled from 'styled-components';

export const CustomSelect = styled.select`
  background-color: #000033;
  color: white;
  border: solid 1px white;
  border-radius: 5px;
  padding: 7px 25px;
  &:after {
    content: '';
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: #fff transparent transparent transparent;
  }
`;
