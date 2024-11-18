import React from 'react';

const Card = ({product}) => {
    const {name, price,category,popularity,description,image} = product
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price:{price}</p>
          <p>Category:{category}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    );
};

export default Card;