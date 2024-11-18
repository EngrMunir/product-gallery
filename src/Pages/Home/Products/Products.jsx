import React, { useEffect, useState } from 'react';
import Card from './Card';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])
    return (
        <div>
            <h2>Our Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto'>
                {
                    products.map(product =><Card product={product}></Card>)
                }
            </div>
        </div>
    );
};

export default Products;