import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {connect} from 'react-redux';
import {getProductAction, resetProductsAction} from "../redux/productsActions";


const ProductDetails = ({product, getProduct, resetProducts}) => {

    const {productId} = useParams();

    useEffect(() => {
        getProduct(productId); // dispatch thunk that make async and dispatch usual actions
    }, [productId]);

    useEffect(() => {   // to clean up ProductDetails (compWillUnmount)
        resetProducts()
    }, []);

    if (!productId) return null
    return (
        <div className="grid container">
            <div className="placeholder segment">
                <Link to="/">
                    <p>Go back</p>
                </Link>
                <img src={product.image} alt=""/>
                <h1>{product.title}</h1>
                <p>${product.price}</p>
                <h3>{product.category}</h3>
                <p>{product.description}</p>
                <button>Add to Cart</button>
            </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    product: state.products.product,
    isProductLoaded: state.products.productLoaded

});

const mapDispatchToProps = (dispatch) => {
    return {
        getProduct: (id) => dispatch(getProductAction(id)),
        resetProducts: () => dispatch(resetProductsAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
