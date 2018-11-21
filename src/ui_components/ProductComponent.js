import React from 'react';
import Grid from '@material-ui/core/Grid'
import Button from "@material-ui/core/es/Button/Button";

const ProductComponent = (props) => {


    return (
        <Grid item xs={12} sm={12} md={3} className={'product-wrapper'} id={props.id}>

            <div className={'product-inner-wrapper'}>

                <div className={'product-image-outer-wrapper'}>
                    <div className={'product-image-inner-wrapper'}>
                        <div className={'watch-eye-product'}></div>
                        <img className={'product-image'} srcSet={props.image} alt={props.name}/>
                        <Button className={'product-add-to-cart-button'} variant="extendedFab" color={'default'} aria-label="add to cart">Добави в количка</Button>
                    </div>
                </div>
                <h5>{props.name}</h5>
                <p className={'product-price'}>{props.price} лв.</p>
            </div>
        </Grid>
    )

}

export default ProductComponent