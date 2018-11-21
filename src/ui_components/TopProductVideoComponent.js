import React from 'react';
import Play from 'mdi-react/PlayCircleIcon'

const TopProductVideoComponent = (props) => {


    return (
        <div className={'video-container'}>
            <h2>{props.title}</h2>
            <h2><Play size={68} /></h2>
            <video width="100%" autoPlay={true}  muted={true}>
                <source src="http://wordpress.templatemela.com/woo/WCM02/WCM020046/WP1/wp-content/uploads/2017/08/Apple-Watch-Sport-Unboxing.mp4" type="video/mp4"></source>
            </video>

        </div>
    )
};


export default TopProductVideoComponent;