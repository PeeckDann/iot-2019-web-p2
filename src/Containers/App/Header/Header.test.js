import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../Icons/ShopLogo.svg', () => 'ShopLogo');

describe('Header Component', () => {
  it('renders the Header component correctly', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );

    expect(screen.getByRole('img', { name: 'Shop Logo' })).toBeInTheDocument();
    expect(screen.getByText('Shish')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Catalog')).toBeInTheDocument();
    expect(screen.getByText('Cart')).toBeInTheDocument();
  });

  it('navigates to the correct paths', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );

    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('Catalog').closest('a')).toHaveAttribute('href', '/catalog');
    expect(screen.getByText('Cart').closest('a')).toHaveAttribute('href', '/cart');
  });
});
