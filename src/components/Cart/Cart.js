import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

function Cart({items, currency, total, removeFromCart}) {
  console.log(items);
  return (
    <div>
        <h3>
            Shopping Cart
        </h3>
        <div className='cart'>
            <div className='panel panel-default'>
                <div className='panel-body'>
                    {items.length > 0 && (
                        <div className='cart__body'>
                            {
                                items.map((item) => (
                                    <CartItem 
                                        key={item.id}
                                        {...item}
                                        onClick={() => removeFromCart(item.id)}
                                    />
                                ))
                            }
                        </div>
                    )}
                </div>
                {
                    items.length === 0 && (
                        <div className='alert alert-info'>
                            Cart is Empty
                        </div>
                    )
                }
                <div className='cart__total'>
                    Total: {total} {currency}
                </div>
            </div>
        </div>
    </div>
  );
}
Cart.PropsTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
    removeFromCart: PropTypes.func.isRequired
}
export default Cart;
