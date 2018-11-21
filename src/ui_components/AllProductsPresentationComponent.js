import React from 'react';
import Grid from '@material-ui/core/Grid'
import Rhombus from "mdi-react/RhombusIcon"

const AllProductsPresentationComponent = (props) => {


    return (
        <div className={'all-products-presentation-wrapper'} style={{
            display: 'block',
            border: '1px solid red',
            backgroundImage: 'url(\'http://wordpress.templatemela.com/woo/WCM02/WCM020046/WP1/wp-content/uploads/2014/05/About-BG.jpg\')',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <h1>ABOUT WATCH OVER</h1>
            <Grid container>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div className={'products-presentation-info-wrapper'}>
                        <h3>Lorem Ipsum is simply dummy text !!!</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a
                            galley.
                        </p>
                        <ul className="list">
                            <li>
                                <a href="#">
                                    <p><Rhombus className={'bullet'} size={15}/>
                                        Lorem Ipsum is simply
                                        dummy text of the printing and typesetting</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p><Rhombus className={'bullet'} size={15}/>
                                        Lorem Ipsum is simply
                                        dummy text of the printing and typesetting</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p><Rhombus className={'bullet'} size={15}/>
                                        Lorem Ipsum is simply
                                        dummy text of the printing and typesetting</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p><Rhombus className={'bullet'} size={15}/>
                                        Lorem Ipsum is simply
                                        dummy text of the printing and typesetting</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img
                        src="http://wordpress.templatemela.com/woo/WCM02/WCM020046/WP1/wp-content/uploads/2014/05/About-Us-pro.png"/>
                </Grid>
                <Grid item xs={2}>

                </Grid>
            </Grid>

        </div>
    )
};

export default AllProductsPresentationComponent