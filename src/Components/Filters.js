import React from 'react';
import { FilterContainer, Label, Filters } from '../Components.styled/Filters.styled';
import CustomSelect from './Select';
import SearchInput from './SearchInput';

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

export default FilterMenu;
