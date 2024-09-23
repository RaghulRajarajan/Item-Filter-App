// src/__tests__/ItemList.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ItemList from '../components/ItemList';

const mockStore = configureStore([]);

test('renders filtered items correctly', () => {
  const store = mockStore({
    items: { items: ['Apple', 'Banana', 'Cherry'], searchTerm: 'Ap' },
  });

  render(
    <Provider store={store}>
      <ItemList />
    </Provider>
  );

  expect(screen.getByText(/apple/i)).toBeInTheDocument(); // Case-insensitive match
  expect(() => screen.getByText(/banana/i)).toThrow();   // Banana should not be displayed
});
