import React, { useEffect, useState } from 'react';
import Card from './Card';

const Products = () => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [category, setCategory] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOption, setSortOption] = useState("");

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
        filterAndSearchProducts(selectedCategory,searchQuery, sortOption)
    }

    const handleSearch =(query)=>{
        setSearchQuery(query)
        filterAndSearchProducts(category,query, sortOption)
    }

    const handleSort =(selectedSort)=>{
        setSortOption(selectedSort)
        filterAndSearchProducts(category, searchQuery, selectedSort)
    }

    const filterAndSearchProducts=(selectedCategory, query, sort)=>{
        let filtered = products;

        if(selectedCategory){
             filtered  = products.filter(product => product.category === selectedCategory)
        }
        if(query){
            filtered=filtered.filter(product => product.name.toLowerCase().includes(query.toLowerCase()))
        }

        if (sort === "priceLowToHigh") {
            filtered = filtered.sort((a, b) => a.price - b.price);
        } else if (sort === "priceHighToLow") {
            filtered = filtered.sort((a, b) => b.price - a.price);
        } else if (sort === "popularity") {
            filtered = filtered.sort((a, b) => b.popularity - a.popularity);
        }
        setFilteredProducts(filtered)
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
                    <select onChange={(e) => handleSort(e.target.value)}>
                        <option value="">Sort By</option>
                        <option value="priceLowToHigh">Price: Low to High</option>
                        <option value="priceHighToLow">Price: High to Low</option>
                        <option value="popularity">Popularity</option>
                    </select>
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