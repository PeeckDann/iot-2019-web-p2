import React from "react";
import {Container, FilterMenu, Label, Filters, Select, Search, Apply, Products, Product, ProductImage, ProductName, ProductDescription, ProductPrice, ViewMore} from "./Catalog.styled";
import ProductImageBeta from "../Icons/TileImage.jpeg";

const Catalog = () => {
    return (
        <Container>
            <FilterMenu>
                <Label>Filter by:</Label>
                <Filters>
                    <Select name="filter-1">
                        <option value="name">Name</option>
                        <option value="price">Price</option>
                    </Select>
                    <Select name="filter-2">
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </Select>
                </Filters>
                <Search placeholder="Type something ..."/>
                <Apply>Apply</Apply>
            </FilterMenu>
            <Products>
                {seafoodList.map((seafood) => 
                <Product>
                    <ProductImage src={ProductImageBeta} alt="Image"></ProductImage>
                    <ProductName>{seafood.name}</ProductName>
                    <ProductDescription>{seafood.description}</ProductDescription>
                    <ProductPrice>Price: {seafood.price}$</ProductPrice>
                    <ViewMore>View More</ViewMore>
                </Product>
                )}
            </Products>
        </Container>
    );
};

export default Catalog;

const seafoodList = [
    {
        id: 1,
        name: "Fish 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.",
        price: 123
    },
    {
        id: 2,
        name: "Fish 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.",
        price: 234
    },
    {
        id: 3,
        name: "Fish 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.",
        price: 345
    },
    {
        id: 4,
        name: "Fish 4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.",
        price: 456
    },
    {
        id: 5,
        name: "Fish 5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.",
        price: 567
    },
    {
        id: 6,
        name: "Fish 6",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.",
        price: 678
    },
    {
        id: 7,
        name: "Fish 7",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.",
        price: 789
    },
    {
        id: 8,
        name: "Fish 8",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.",
        price: 890
    },
    {
        id: 9,
        name: "Fish 9",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.",
        price: 901
    },
    {
        id: 10,
        name: "Fish 10",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.",
        price: 1012
    },
    {
        id: 11,
        name: "Fish 8",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta possimus doloribus, labore enim quae maiores nesciunt saepe voluptas, reprehenderit, sed quas vel. Quas maxime quo veritatis esse, quae nobis.",
        price: 1023
    },
]