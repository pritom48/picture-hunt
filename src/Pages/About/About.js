import React from 'react';
import mypic from '../../img/IMG_20220307_235243_785.jpg'

const About = () => {
    return (
        <div className='container'>
            <div className='d-flex '>
                <img height={400} className="rounded mx-auto d-block" src={mypic} alt="" />
            </div>
            <p className='text-center'> <b>"I want to be a competitive programmer. This course is my one step .After this course I will try to get a internship or job. And I will explore others programming languages."</b> </p>
        </div>
    );
};

export default About;