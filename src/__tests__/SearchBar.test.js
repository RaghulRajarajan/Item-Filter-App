// src/__tests__/SearchBar.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SearchBar from '../components/SearchBar';
import { setSearchTerm } from '../features/itemsSlice';

const mockStore = configureStore([]);

test('updates search term in Redux state', () => {
  const store = mockStore({
    items: { searchTerm: '' },
  });
  store.dispatch = jest.fn(); // Mock dispatch

  render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );

  fireEvent.change(screen.getByPlaceholderText(/search items.../i), { target: { value: 'Banana' } });

  expect(store.dispatch).toHaveBeenCalledWith(setSearchTerm('Banana'));
});
