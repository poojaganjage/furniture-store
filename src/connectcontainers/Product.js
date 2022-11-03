import {connect} from 'react-redux';
import Product from '../components/Product/Product';
import {isInCart, addToCart, removeFromCart} from '../redux/cart';

const mapStateToProps = (state, props) => {
    return {
        isInCart: isInCart(state, props)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        removeFromCart: (id) => dispatch(removeFromCart(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);
