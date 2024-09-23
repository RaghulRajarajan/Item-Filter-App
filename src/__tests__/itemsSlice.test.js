// src/__tests__/itemsSlice.test.js
import itemsReducer, { setItems, setSearchTerm } from '../features/itemsSlice';

test('should handle initial state', () => {
  expect(itemsReducer(undefined, {})).toEqual({
    items: [],
    searchTerm: '',
  });
});

test('should handle setItems', () => {
  const previousState = { items: [], searchTerm: '' };
  expect(itemsReducer(previousState, setItems(['Apple']))).toEqual({
    items: ['Apple'],
    searchTerm: '',
  });
});

test('should handle setSearchTerm', () => {
  const previousState = { items: [], searchTerm: '' };
  expect(itemsReducer(previousState, setSearchTerm('Banana'))).toEqual({
    items: [],
    searchTerm: 'Banana',
  });
});
