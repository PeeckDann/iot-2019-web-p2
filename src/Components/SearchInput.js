import React, { useState } from 'react';
import { SearchContainer, Input, Search } from '../Components.styled/Filters.styled';

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

export default SearchInput;
