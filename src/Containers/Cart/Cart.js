import React, { useState, useEffect } from 'react';
import {
  Container,
  Heading,
  ItemList,
  Item,
  Image,
  Name,
  Quantity,
  Counter,
  Number,
  Delete,
  Price,
  TotalPrice,
  BottomButtons,
  ToCatalog,
  Continue,
  Empty,
} from './Cart.styled';
import ImageBeta from '../Icons/TileImage.jpeg';
import { useDispatch, useSelector } from 'react-redux';
import { remove, increment, decrement } from '../../Store/Actions/Actions.js';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const seafoodList = useSelector((state) => state);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = seafoodList.reduce((counter, seafood) => counter + seafood.price * seafood.counter, 0);
    setTotalPrice(newTotalPrice);
  }, [seafoodList]);

  const handleDecrement = (seafood) => () => dispatch(decrement(seafood));
  const handleIncrement = (seafood) => () => dispatch(increment(seafood));
  const handleRemove = (seafood) => () => dispatch(remove(seafood));

  return (
    <Container>
      <Heading>Shopping Cart</Heading>
      {seafoodList.length === 0 && <Empty>Cart is empty</Empty>}
      <ItemList>
        {seafoodList.map((seafood) => (
          <Item key={seafood.id}>
            <Image src={ImageBeta} />
            <Name>{seafood.name}</Name>
            <Quantity>
              <Counter onClick={handleDecrement(seafood)}>-</Counter>
              <Number>{seafood.counter}</Number>
              <Counter onClick={handleIncrement(seafood)}>+</Counter>
            </Quantity>
            <Price>{seafood.counter * seafood.price}$</Price>
            <Delete onClick={handleRemove(seafood)}>x</Delete>
          </Item>
        ))}
      </ItemList>
      <TotalPrice>Total price: {totalPrice}$</TotalPrice>
      <BottomButtons>
        <Link to="/catalog">
          <ToCatalog>Back to Catalog</ToCatalog>
        </Link>
        <Link to="/checkout">
          <Continue>Continue</Continue>
        </Link>
      </BottomButtons>
    </Container>
  );
};

export default Cart;
