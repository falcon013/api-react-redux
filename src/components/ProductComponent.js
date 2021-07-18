import React from "react";
import { Link } from "react-router-dom";

const ProductComponent = (props) => {
    const {product} = props
        return (
            <div key={product.id}>
                <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                        <div className="card">
                                <img src={product.image} alt={product.title} />
                            <div className="content">
                                <p className="header">{product.title}</p>
                                <p className="price">$ {product.price}</p>
                                <p className="meta">{product.category}</p>
                            </div>
                        </div>
                </Link>
            </div>
        )
};

export default ProductComponent;