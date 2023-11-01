import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../Icons/ShopLogo.svg', () => 'ShopLogo');
jest.mock('../../Icons/Facebook.svg', () => 'Facebook');
jest.mock('../../Icons/Twitter.svg', () => 'Twitter');
jest.mock('../../Icons/LinkedIn.svg', () => 'LinkedIn');
jest.mock('../../Icons/GooglePlus.svg', () => 'GooglePlus');

describe('Footer Component', () => {
  it('renders the Footer component correctly', () => {
    render(<Footer />);

    expect(screen.getByRole('img', { name: 'Shop Logo' })).toBeInTheDocument();
    expect(screen.getByText('Shish')).toBeInTheDocument();
    expect(screen.getByText('2020 IoT © Copyright all rights reserved UwU')).toBeInTheDocument();
  });

  it('displays the correct shop name', () => {
    render(<Footer />);

    expect(screen.getByText('Shish')).toBeInTheDocument();
  });
});
