import React, {useState, useEffect} from "react";
import {Container,  Heading, ItemList, Item, Name, Counter, Number, Delete, Price, TotalPrice, BottomButtons, ToCatalog, Continue} from "./Cart.styled"
import Image from "../Icons/TileImage.jpeg";
import {useDispatch} from "react-redux";
import {remove, increment, decrement} from "../../Store/Actions/Actions.js";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Cart = () => {

    const dispatch = useDispatch();
    const seafoodList = useSelector(state => state);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setTotalPrice(seafoodList.reduce((counter, seafood) =>
            (counter + seafood.price * seafood.counter), 0))
    }, [seafoodList])

    return(
        <Container>
            <Heading>Shopping Cart</Heading>
            <ItemList>
                {seafoodList.map((seafood) =>
                    <Item key={seafood.id}>
                        <Image src={Image}/>
                        <Name>{seafood.name}</Name>
                        <Counter onClick={() => (dispatch(increment(seafood)))}>-</Counter>
                        <Number>{seafood.counter}</Number>
                        <Counter onClick={() => (dispatch(decrement(seafood)))}>+</Counter>
                        <Delete onClick={() => (remove(decrement(seafood)))}></Delete>
                        <Price>{seafood.counter * seafood.price}</Price>
                    </Item>
                )}
            </ItemList>
            <TotalPrice>Total price: {totalPrice}$</TotalPrice>
            <BottomButtons>
                <Link to="/catalog">
                    <ToCatalog>Back to Catalog</ToCatalog>
                </Link>
                <Continue>Continue</Continue>
            </BottomButtons>
        </Container>
    );
};

export default Cart;