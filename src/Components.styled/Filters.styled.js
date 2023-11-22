import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: #000033;
  border-top: solid 1.5px #ffcc33;
`;

export const Label = styled.h1`
  font-size: 16px;
  color: white;
`;

export const Filters = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  margin-left: 5%;
  max-width: 450px;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  margin-right: 5%;
  max-width: 400px;
`;

export const Input = styled.input`
  background-color: #000033;
  color: white;
  border: solid 1px white;
  border-radius: 5px;
  padding: 8px 25px;
`;

export const Search = styled.button`
  background-color: #000033;
  font-size: 14px;
  font-weight: bold;
  color: white;
  border: solid 1px white;
  border-radius: 5px;
  padding: 7px 25px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #000033;
  }
`;
