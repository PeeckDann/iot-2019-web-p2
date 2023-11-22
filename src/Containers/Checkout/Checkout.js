import React from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutForm from './CheckoutForm.js';

const Checkout = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/success');
  };

  return <CheckoutForm onSubmit={handleSubmit} />;
};

export default Checkout;
