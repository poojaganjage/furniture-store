import {connect} from 'react-redux';
import {getItems, getCurrency, getTotal, removeFromCart} from '../redux/cart';
import Cart from '../components/Cart/Cart';

const mapStateToProps = (state) => {
    return {
        items: getItems(state),
        currency: getCurrency(state),
        total: getTotal(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
