// ProductCard.js
import React from 'react';

function ProductCard({ product }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
      <h3>{product.name}</h3>
      <p style={{ marginBottom: '8px' }}>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
}

export default ProductCard;
