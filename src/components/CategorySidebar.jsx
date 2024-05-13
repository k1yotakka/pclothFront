import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CategorySidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('/api/category')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div>
      <h2>Категории</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CategorySidebar;
