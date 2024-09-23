// src/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Item Filter App header', () => {
  render(<App />);
  const headerElement = screen.getByText(/item filter app/i); // Update to match your header
  expect(headerElement).toBeInTheDocument();
});
