import React from 'react';
import PropTypes from 'prop-types';

function Product({id, name, price, currency, image, addToCart, removeFromCart, isInCart}) {
  const handleClick = () => {
    if(isInCart) {
        removeFromCart(id);
    } else {
        addToCart(id);
    }
  }
  return (
    <div className='product thumbnail'>
        <img src={image} alt='product' />
        <div className='captions'>
            <h3>{name}</h3>
            <div className='product__price'>
                {price} {currency}
            </div>
            <div className='product__price-wrap'>
                <button className={isInCart ? 'btn btn-danger' : 'btn btn-primary'} onClick={handleClick}>
                    {isInCart ? 'Remove' : 'Add To Cart'}
                </button>
            </div>
        </div>
    </div>
  );
}
Product.PropsTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    currency: PropTypes.string,
    image: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    removeFromCart: PropTypes.func.isRequired
}
export default Product;
