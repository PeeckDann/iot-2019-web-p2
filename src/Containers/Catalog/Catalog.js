import React, { useState, useEffect } from 'react';
import {
  Container,
  Products,
  Product,
  ProductImage,
  ProductName,
  ProductDescription,
  ProductPrice,
  ViewMore,
} from './Catalog.styled';
import { Link } from 'react-router-dom';
import ProductImageBeta from '../Icons/TileImage.jpeg';
import FilterMenu from '../../Components/Filters';
import { getFilteredSeafood } from '../../Connection/Connection.js';
import Spinner from '../../Components/Spinner.js';

const Catalog = () => {
  const [seafoodList, setSeafoodList] = useState([]);
  const [showedSeafood, setShowedSeafood] = useState([]);
  const [typeFilter, setTypeFilter] = useState('None');
  const [countryFilter, setCountryFilter] = useState('None');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const filteredSeafoodData = await getFilteredSeafood(typeFilter, countryFilter);
      setSeafoodList(filteredSeafoodData);
    };

    fetchData();
  }, [typeFilter, countryFilter]);

  useEffect(() => {
    if (!seafoodList) return;

    const pattern = new RegExp(searchQuery, 'i');
    const filteredSeafood = seafoodList.filter(
      (seafood) => pattern.test(seafood.name) || pattern.test(seafood.description),
    );

    setShowedSeafood(filteredSeafood);
  }, [searchQuery, seafoodList]);

  if (!showedSeafood) return <Spinner />;
  return (
    <Container>
      <FilterMenu
        type={[typeFilter, setTypeFilter]}
        country={[countryFilter, setCountryFilter]}
        search={[searchQuery, setSearchQuery]}
      />
      <Products>
        {showedSeafood.map((seafood) => (
          <Product key={`Product${seafood.id}`}>
            <ProductImage src={ProductImageBeta} alt="Image" />
            <ProductName>{seafood.name}</ProductName>
            <ProductDescription>{seafood.description}</ProductDescription>
            <ProductPrice>Price: {seafood.price}$</ProductPrice>
            <Link to={`/item/${seafood.id}`}>
              <ViewMore>View More</ViewMore>
            </Link>
          </Product>
        ))}
      </Products>
    </Container>
  );
};

export default Catalog;
