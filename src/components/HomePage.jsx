import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import CategorySidebar from './CategorySidebar';
import NavigationBar from './NavigationBar';

function HomePage() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const timestamp = new Date().getTime();
    axios.get(`/api/category?t=${timestamp}`)
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });

    axios.get('/api/product')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <NavigationBar />
      <div style={{ display: 'flex' }}>
        <div style={{ width: '20%' }}>
          {Array.isArray(categories) && categories.map(category => (
            <CategorySidebar key={category.id} category={category} />
          ))}
        </div>
        <div style={{ flex: 1 }}>
          {Array.isArray(products) && products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}


export default HomePage