// src/App.js
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import ItemList from './components/ItemList';
import SearchBar from './components/SearchBar';
import { setItems } from './features/itemsSlice';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const initialItems = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
    store.dispatch(setItems(initialItems));
  }, []);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Provider store={store}>
      <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
        <h1 className="header">Item Filter App</h1>
        <div className="search-container">
          <SearchBar />
        </div>
        <ItemList />
        <div className={`theme-toggle ${darkMode ? 'dark' : 'light'}`} onClick={toggleTheme}>
          <div className={`toggle-switch ${darkMode ? 'move-right' : 'move-left'}`}>
            <div className="toggle-icon">
              {darkMode ? '🌙' : '☀️'}
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
