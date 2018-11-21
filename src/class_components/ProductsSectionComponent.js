import React, {Component} from 'react';
import Button from "@material-ui/core/Button/Button";
import Product from '../ui_components/ProductComponent'
import Grid from "@material-ui/core/Grid";

class ProductsSectionComponent extends Component {


    render() {

        this.productshtml = '<div><h1>Няма налични продукти</h1></div>'

        const products = [

            {
                id: 1,
                name: 'AD',
                discount: 11,
                image: 'http://wordpress.templatemela.com/woo/WCM02/WCM020046/WP1/wp-content/uploads/2014/04/1-1-320x320.jpg',
                price: 12332.24,
                old_price: '1232',
                category: 1
            },
            {
                id: 2,
                name: 'AD',
                discount: 11,
                image: 'http://wordpress.templatemela.com/woo/WCM02/WCM020046/WP1/wp-content/uploads/2014/04/1-1-320x320.jpg',
                price: 12332.24,
                old_price: '1232',
                category: 1
            },
            {
                id: 3,
                name: 'AD',
                discount: 11,
                image: 'http://wordpress.templatemela.com/woo/WCM02/WCM020046/WP1/wp-content/uploads/2014/04/1-1-320x320.jpg',
                price: 12332.24,
                old_price: '1232',
                category: 1
            },
            {
                id: 4,
                name: 'AD',
                discount: 11,
                image: 'http://wordpress.templatemela.com/woo/WCM02/WCM020046/WP1/wp-content/uploads/2014/04/1-1-320x320.jpg',
                price: 12332.24,
                old_price: '1232',
                category: 1
            },
            {
                id: 5,
                name: 'AD',
                discount: 11,
                image: 'http://wordpress.templatemela.com/woo/WCM02/WCM020046/WP1/wp-content/uploads/2014/04/1-1-320x320.jpg',
                price: 12332.24,
                old_price: '1232',
                category: 1
            },
            {
                id: 6,
                name: 'AD',
                discount: 11,
                image: 'http://wordpress.templatemela.com/woo/WCM02/WCM020046/WP1/wp-content/uploads/2014/04/1-1-320x320.jpg',
                price: 12332.24,
                old_price: '1232',
                category: 1
            },
            {
                id: 7,
                name: 'AD',
                discount: 11,
                image: 'http://wordpress.templatemela.com/woo/WCM02/WCM020046/WP1/wp-content/uploads/2014/04/1-1-320x320.jpg',
                price: 12332.24,
                old_price: '1232',
                category: 1
            }

        ];

        return (
            <div>
                <h1>Products</h1>

                <div className={'filters-wrapper'}>

                    <Grid container>

                        <Grid item xs={12}>
                            <Button variant="extendedFab" color={'primary'} aria-label="new" className={'new'}
                                    onClick={() => {
                                        this.RenderProducts(products,1)
                                    }}>
                                НОВИ
                            </Button>
                            <Button variant="extendedFab" color={'secondary'} aria-label="discounted"
                                    className={'discounted'}>
                                Намалени
                            </Button>
                            <Button variant="extendedFab" color={'default'} aria-label="beautiful"
                                    className={'beautiful'}>
                                Прекрасни
                            </Button>

                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={0} lg={2}>

                        </Grid>
                        <Grid item xs={12} md={12} lg={8}>
                            <Grid container>
                                {this.RenderProducts(products)}
                            </Grid>
                        </Grid>
                        <Grid item xs={0} lg={2}>

                        </Grid>
                    </Grid>

                </div>
            </div>
        )
    }

    RenderProducts(products, categoryId = null) {

        return products.map(function (product) {
            return (
                <Product {...product}/>
            )
        });
    }

}


export default ProductsSectionComponent;