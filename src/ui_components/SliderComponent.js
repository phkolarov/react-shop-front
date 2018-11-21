import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';

class SliderComponent extends Component{


    render() {
        return(
            <div className='slider-wrapper'>

                <Carousel>
                    <Carousel.Item>
                        <img width='100%' alt="900x500" src="http://wordpress.templatemela.com/woo/WCM02/WCM020046/WP1/wp-content/uploads/2017/07/Main-banner-02.jpg" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width='100%'  alt="900x500" src="http://wordpress.templatemela.com/woo/WCM02/WCM020046/WP1/wp-content/uploads/2017/07/Mian-Banner-01.jpg" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}


export default SliderComponent;