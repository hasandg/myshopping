import React from 'react';
import "./Product.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Rating from '@material-ui/lab/Rating';

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>The lean startup</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99
                    </strong>
                </p>
                <div className="product_rating">
                    <p>🌟</p><p>🌟</p><p>🌟</p><p>🌟</p>

                    {/*<Rating/>*/}
                </div>
            </div>
        </div>
    );
}

export default Product;