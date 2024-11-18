import React, { useEffect, useState } from 'react';
import Card from './Card';

const Products = () => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [category, setCategory] = useState("");

    useEffect(()=>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data =>{
            setProducts(data)
            setFilteredProducts(data)
        })
    },[])

    const handleFilter=(selectedCategory)=>{
        setCategory(selectedCategory)

        if(category ===''){
            setFilteredProducts(products)
        }else{
            const filtered  = products.filter(product => product.category === selectedCategory)
            setFilteredProducts(filtered)
        }
    }
    return (
        <div>
            <h2>Our Products</h2>
            <div className='flex justify-center mb-5 gap-10'>
                <div className="filter-sort">
                    <select onChange={(e) => handleFilter(e.target.value)}>
                        <option value="">All Categories</option>
                        <option value="Budget">Budget</option>
                        <option value="Gaming">Gaming</option>
                        <option value="Convertible">Convertible</option>
                        <option value="Ultrabook">Ultrabook</option>
                    </select>
                </div>
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => handleSearch(e.target.value)}
                    />
                    <div>
                        <button>Sort</button>
                    </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto'>
                {
                    filteredProducts.map(product =><Card product={product}></Card>)
                }
            </div>
        </div>
    );
};

export default Products;