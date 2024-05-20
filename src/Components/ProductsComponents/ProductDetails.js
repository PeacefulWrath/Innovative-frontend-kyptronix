import React from 'react'
import { useLocation } from 'react-router-dom';
import styles from "../../styles/ProductsStyles.module.css";
import rating from "../../assets/rating.png";
function ProductDetails() {
    const location = useLocation();
    const product = location.state;

    return (
        <div className='row'>
            <div className='col-md-6'>
                <img
                    src={product?.image}
                    alt="product-image"
                    className='w-100'
                />
            </div>
            <div className='col-md-6'>
                <div className='d-inline-flex flex-column w-100'>
                    <h1>{product?.name}</h1>
                    <img alt="rating" className={styles.Products_our_products_rating} src={rating} />
                    <hr className='w-100'/>
                    <p><strong>{`$ ${product?.real_price}`}</strong></p>
                    
                </div>
            </div>
        </div>
    )
}

export default ProductDetails