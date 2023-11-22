import React from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutForm from './CheckoutForm.js';
import { removeAll } from '../../Store/Actions/Actions.js';
import { useDispatch } from 'react-redux';

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(removeAll());
    navigate('/success');
  };

  return <CheckoutForm onSubmit={handleSubmit} />;
};

export default Checkout;
