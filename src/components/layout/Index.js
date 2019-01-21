import React, { Fragment } from 'react';
import './Index.css';
import frontPic from '../../frontPic.jpg';
import Songs from '../songs/Songs';

const Index = () => {
    return(
        <Fragment>
            <img src={frontPic} alt='Front Pic' id='frontPic' />
            <Songs />
        </Fragment>
    )
}

export default Index;
