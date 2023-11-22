import React, { useState } from 'react';
import { FilterContainer, Label, Filters, SearchContainer, Input, Search } from '../Components.styled/Filters.styled';
import CustomSelect from './Select';

const FilterMenu = ({ type, country, search }) => {
  return (
    <FilterContainer>
      <Filters>
        <Label>Filter by:</Label>
        <CustomSelect options={['Frozen', 'Fresh']} state={type} />
        <CustomSelect options={['Japan', 'Indonesia', 'Netherlands']} state={country} />
      </Filters>
      <SearchInput state={search} />
    </FilterContainer>
  );
};

const SearchInput = ({ state: [searchQuery, setSearchQuery] }) => {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSearchClick = () => {
    setSearchQuery(text);
  };

  return (
    <SearchContainer>
      <Input value={text} placeholder="Type something ..." onChange={handleInputChange} />
      <Search onClick={handleSearchClick}>Search</Search>
    </SearchContainer>
  );
};

export default FilterMenu;
