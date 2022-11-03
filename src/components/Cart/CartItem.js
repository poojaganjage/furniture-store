import React from 'react';
import PropTypes from 'prop-types';

function CartItem({name, price, currency, onClick}) {
  return (
    <div className='cart-item'>
        <div>
            <button className='btn btn-danger' onClick={onClick}>X</button>
            <span className='cart-item__name'>{name}</span>
        </div>
        <div className='cart-item__price'>{price} {currency}</div>
    </div>
  );
}
CartItem.PropsTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}
export default CartItem;
