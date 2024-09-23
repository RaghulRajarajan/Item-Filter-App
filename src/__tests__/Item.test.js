// src/__tests__/Item.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Item from '../components/Item';

test('renders item correctly', () => {
  render(<Item item="Apple" />);
  expect(screen.getByText(/apple/i)).toBeInTheDocument(); // Case-insensitive match
});
