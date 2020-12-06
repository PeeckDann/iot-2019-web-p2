import React from "react";
import {Container, ProductSection, ProductImage, ProductInfo, Characteristics, Country, Type, ProductName, ProductDescription, BuyOptions, Price, Buttons, GoBack, AddToCart} from "./Item.styled";
import { Link, useParams } from "react-router-dom";
import ProductIcon from "../Icons/TileImage.jpeg";
import seafoodListContext from "../../Contexts/Seafood";

const Item = () => {

    const seafoodList = React.useContext(seafoodListContext);
    const {id} = useParams();
    const seafood = seafoodList.find(seafood => (seafood.id === parseInt(id)));

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