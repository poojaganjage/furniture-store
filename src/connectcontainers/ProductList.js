import {connect} from 'react-redux';
import ProductList from '../components/ProductList/ProductList';
import {getProducts} from '../redux/product';

const mapStateToProps = (state) => {
    return {
        products: getProducts(state)
    }
}
export default connect(mapStateToProps, null)(ProductList);
