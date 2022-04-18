import React from 'react';
import mypic from '../../img/IMG_20220307_235243_785.jpg'

const About = () => {
    return (
        <div className='container'>
            <div className='d-flex '>
                <img height={400} className="rounded mx-auto d-block" src={mypic} alt="" />
            </div>
        </div>
    );
};

export default About;