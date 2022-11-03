import React from 'react';
import PropTypes from 'prop-types';
import Product from '../../connectcontainers/Product';

function ProductList({products}) {
  return (
    <div>
        <h3>Products</h3>
        <ul className='product-list'>
            {
                products.map((product) => (
                    <li key={product.id} className='product-list__item'>
                        <Product {...product} />
                    </li>
                ))
            }
        </ul>
    </div>
  );
}
ProductList.PropsTypes = {
    products: PropTypes.array
}
export default ProductList;
