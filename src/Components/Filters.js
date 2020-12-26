import React, { useState } from "react";
import {FilterContainer, Label, Filters, SearchContainer, Input, Search} from "../Components.styled/Filters.styled";
import CustomSelect from "./Select";

function FilterMenu({ type, country, search }) {


    return (
        <FilterContainer>
            <Filters>
                <Label>Filter by:</Label>
                <CustomSelect options={["Frozen", "Fresh"]} state={type}/>
                <CustomSelect options={["Japan", "Indonesia", "Netherlands"]} state={country}/>
            </Filters>
            <SearchInput state={search}/>
        </FilterContainer>
    );
}

function SearchInput({ state: [searchQuery, setSearchQuery] }) {

    const [text, setText] = useState("");

    return (
        <SearchContainer>
            <Input value={text} placeholder="Type something ..." onChange={e => (setText(e.target.value))}/>
            <Search onClick={() => (setSearchQuery(text))}>Search</Search>
        </SearchContainer>
    );
}

export default FilterMenu;