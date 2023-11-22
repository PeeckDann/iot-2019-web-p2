import React, { useState, useEffect } from 'react';
import {
  Container,
  ProductSection,
  ProductImage,
  ProductInfo,
  Characteristics,
  Country,
  Type,
  ProductName,
  ProductDescription,
  BuyOptions,
  Price,
  Buttons,
  GoBack,
  AddToCart,
} from './Item.styled';
import { Link, useParams } from 'react-router-dom';
import ProductIcon from '../Icons/TileImage.jpeg';
import { getSeafoodById } from '../../Connection/Connection.js';
import Spinner from '../../Components/Spinner.js';
import { useDispatch } from 'react-redux';
import { add } from '../../Store/Actions/Actions.js';

const Item = () => {
  const [seafood, setSeafood] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSeafood = async () => {
      try {
        const seafoodData = await getSeafoodById(id);
        setSeafood(seafoodData);
      } catch (error) {
        console.error('Error fetching seafood:', error);
      }
    };

    fetchSeafood();
  }, [id]);

  if (!seafood) return <Spinner />;

  return (
    <Container>
      <ProductSection>
        <ProductImage src={ProductIcon} alt="Image" />
        <ProductInfo>
          <Characteristics>
            <Country>{seafood.country}</Country>
            <Type>{seafood.type}</Type>
          </Characteristics>
          <ProductName>{seafood.name}</ProductName>
          <ProductDescription>{seafood.description}</ProductDescription>
        </ProductInfo>
      </ProductSection>
      <BuyOptions>
        <Price>Price: {seafood.price}$</Price>
        <Buttons>
          <Link to="/catalog">
            <GoBack>Go Back</GoBack>
          </Link>
          <AddToCart onClick={() => dispatch(add(seafood))}>Add To Cart</AddToCart>
        </Buttons>
      </BuyOptions>
    </Container>
  );
};

export default Item;
