import React, {useState, useEffect} from "react";
import {Container, ProductSection, ProductImage, ProductInfo, Characteristics, Country, Type, ProductName, ProductDescription, BuyOptions, Price, Buttons, GoBack, AddToCart} from "./Item.styled";
import {Link, useParams} from "react-router-dom";
import ProductIcon from "../Icons/TileImage.jpeg";
import {getSeafoodById} from "../../Connection/Connection.js";
import Spinner from "../../Components/Spinner.js";

const Item = () => {

    const [seafood, setSeafood] = useState();

    const {id} = useParams();

    useEffect(() => {
        (async function () {
            setSeafood(await getSeafoodById(id));
        })()
    });

    if (!seafood) return <Spinner/>;
    return(
        <Container>
            <ProductSection>
                <ProductImage src={ProductIcon} alt="Image"/>
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
                    <AddToCart>Add To Cart</AddToCart>
                </Buttons>
            </BuyOptions>
        </Container>
    );
};

export default Item;