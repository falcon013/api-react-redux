import React, {useEffect} from "react";
import {connect} from 'react-redux'
import ProductComponent from "./ProductComponent";
import {getProductsAction} from "../redux/productsActions";

const ProductPage = ({products, getProducts, isLoaded}) => {
// Component didMounted call getProducts => fire dispatch action

    useEffect(() => {
        if (!isLoaded) {  // to avoid unnecessary api calls
            getProducts()
        }
    }, [getProducts, isLoaded]);

    return (
        <div>
            {!isLoaded ?
                <h1>Loading</h1>
                :
                <div className="products-cards">
                    {products.map((product) => (
                        <ProductComponent key={product.id} product={product}/>
                    ))}
                </div>
            }
        </div>
    );
};

const mapStateToProps = (state) => ({
    products: state.products.products,   // state=> products obj => products array
    isLoaded: state.products.productsLoaded

});

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => dispatch(getProductsAction())
    }
}

//  HOC connect let our Comp to connect to redux store.
export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)