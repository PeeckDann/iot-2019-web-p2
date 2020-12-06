import React, {useState, useEffect} from "react";
import {Container, Products, Product, ProductImage, ProductName, ProductDescription, ProductPrice, ViewMore} from "./Catalog.styled";
import {Link} from "react-router-dom";
import ProductImageBeta from "../Icons/TileImage.jpeg";
import FilterMenu from "../../Components/Filters";
import seafoodListContext from "../../Contexts/Seafood";

const Catalog = () => {

    const seafoodList = React.useContext(seafoodListContext);

    const [list, setList] = useState(seafoodList);
    
    const [searchQuery, setSearchQuery] = useState('');
    const [typeFilter, setTypeFilter] = useState('None');
    const [countryFilter, setCountryFilter] = useState('None');

    useEffect(() => {
        const pattern = new RegExp(searchQuery, 'i');

        let filteredSeafood = seafoodList;

        if (typeFilter !== 'None') {
            filteredSeafood = filteredSeafood.filter(item => (item.type === typeFilter));
        }

        if (countryFilter !== 'None') {
            filteredSeafood = filteredSeafood.filter(item => (item.country === countryFilter));
        }

        if (searchQuery !== '') {
            filteredSeafood = filteredSeafood.filter(seafood => (pattern.test(seafood.name) || pattern.test(seafood.description)));
        }

        setList(filteredSeafood);
    }, [typeFilter, countryFilter, searchQuery, seafoodList]);

    return (
        <Container>
            <FilterMenu type={[typeFilter, setTypeFilter]}
                    country={[countryFilter, setCountryFilter]}
                    search={[searchQuery, setSearchQuery]}/>
            <Products>
                {list.map((seafood) => 
                <Product>
                    <ProductImage src={ProductImageBeta} alt="Image"></ProductImage>
                    <ProductName>{seafood.name}</ProductName>
                    <ProductDescription>{seafood.description}</ProductDescription>
                    <ProductPrice>Price: {seafood.price}$</ProductPrice>
                    <Link to={"/item/" + seafood.id}>
                        <ViewMore>View More</ViewMore>
                    </Link>
                </Product>
                )}
            </Products>
        </Container>
    );
};

export default Catalog;