import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Img1 from '../img/img1.jpg';
import Img2 from '../img/img2.jpg';
import Img3 from '../img/img3.jpg';
import Img4 from '../img/img5.jpg';
import Img6 from '../img/img6.jpg';
import Img7 from '../img/img7.jpg';
import Img8 from '../img/img8.jpg';
import Img9 from '../img/img9.jpg';

function cart({basketProps}) {
    console.log(basketProps);

    let productsInCart = [];

    Object.keys(basketProps.products).forEach( function(item) {
        console.log(item);
        console.log(basketProps.products[item].inCart);
        if(basketProps.products[item].inCart) {
            productsInCart.push(basketProps.products[item])
        }
        console.log(productsInCart)
    });

    const productImages = [Img1, Img2, Img3, Img4, Img6, Img7, Img8, Img9]

    productsInCart = productsInCart.map( (product, index) => {
        console.log("selected product");
        console.log(product);
        return ( 
            <Fragment>
                <div className="product"><ion-icon name="close-circle"></ion-icon><img src={productImages[index]} />
                    <span className="sm-hide">{product.name}</span>
                </div>
                <div className="price sm-hide">${product.price}.00</div>
                <div className="Quantity">
                <ion-icon className="decrease" name="arrow-back-circle-outline"></ion-icon>
                 <span>{product.numbers}</span>
                <ion-icon className="increase" name="arrow-forward-circle-outline"></ion-icon>
                </div>
                <div className="total">${product.numbers * product.price}.00</div>
            </Fragment>
        )
    });

    return (
        <div className="container-products">
            <div className="product-header">
                <h5 className="product-title">PROJECT</h5>
                <h5 className="price sm-hide">PRICE</h5>
                <h5 className="quantity">QUANTITY</h5>
                <h5 className="total">TOTAL</h5>
            </div>
            <div className="products">
                { productsInCart }
            </div>
            <div className="basketTotalContainer">
                <h4 className="basketTotaltitle">Basket Total</h4>
                <h4 className="basketTotal">{basketProps.cartCost}.00</h4>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
});

export default connect(mapStateToProps, )(cart);
