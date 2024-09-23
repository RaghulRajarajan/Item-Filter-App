// src/components/Item.js
import React from 'react';

const Item = ({ item }) => {
  const images = {
    Apple: 'https://www.earth.com/assets/_next/image/?url=https%3A%2F%2Fcff2.earth.com%2Fuploads%2F2019%2F06%2F19132041%2FHow-the-apple-became-such-a-ubiquitous-iconic-fruit-across-the-globe-1400x850.jpg&w=1080&q=75', // Update with your actual image paths
    Banana: 'https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2018/08/bananas-1354785_1920-1024x683.jpg',
    Cherry: 'https://www.chandigarhayurvedcentre.com/wp-content/uploads/2024/05/900-31.jpg',
    Date: 'https://cdn-anini.nitrocdn.com/YXYWQiDcFcdQfctewEkORZwdFNalbmHA/assets/images/optimized/rev-876d2e1/www.nutstop.com/wp-content/uploads/2023/03/dried-dates-vs-fresh-dates-benefits-and-disadvantages.jpg',
    Elderberry: 'https://www.bigblogofgardening.com/wp-content/uploads/2023/03/elderberry-fruit-1800x1208-1-768x515.webp',
  };

  return (
    <div className="item">
      <img src={images[item]} alt={item} className="item-image" />
      <span>{item}</span>
    </div>
  );
};

export default Item;
