import React from 'react';
import topPic from '../../../img/20220417_105816.jpg'

const Banner = () => {
    return (
        <div className='container mt-5 '>
            <div className='row'>
                <div className='col-lg-7 mt-5 pt-5'>
                    <h1>Choose Your Best Option For <br /> <span className='text-info pt-2'>Your Photography!!</span> </h1>
                    <p className='mt-5 mb-5'>I am a photographer. And I am working in this field last 5 years. You can choose me as my experience. I am very passionate about photography. So if you want to capture you best moments then you can hire me.</p>
                    <button type="button" className="btn btn-success">Hire Me</button>
                </div>
                <div className='col-lg-5 pt-5'>
                    <img className='img-fluid' src={topPic} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;