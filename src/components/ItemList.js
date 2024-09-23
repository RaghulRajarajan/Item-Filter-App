// src/components/ItemList.js
import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';

const ItemList = () => {
  const items = useSelector((state) => state.items.items);
  const searchTerm = useSelector((state) => state.items.searchTerm);
  
  const filteredItems = items.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="item-list">
      {filteredItems.map((item) => (
        <Item key={item} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
