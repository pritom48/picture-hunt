import React from 'react';


const Service = ({ service }) => {

    const { name, img, des, price } = service;

    return (
        <div className="container my-5">
            <div className="card col-sm-12 col-md-4" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h3>{price}$</h3>
                    <p className="card-text">{des}</p>
                    <a href="#" className="btn btn-primary">Hire Me</a>
                </div>
            </div>
        </div>
    );
};

export default Service;