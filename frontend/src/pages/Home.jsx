import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import CarbonSummary from "../components/CarbonSummary";
import { productsData } from "../data/products";


const Home = () => {
const [cart, setCart] = useState([]);


const addToCart = (product) => {
setCart([...cart, product]);
};


return (
<div className="min-h-screen bg-gray-100">
<Navbar cartCount={cart.length} />


<main className="p-6 max-w-6xl mx-auto">
<h2 className ="text-3xl font-bold mb-6">Carbon-Aware Shopping</h2>


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
{productsData.map((product) => (
<ProductCard key={product.id} product={product} onAdd={addToCart} />
))}
</div>


{cart.length > 0 && <CarbonSummary cart={cart} />}
</main>
</div>
);
};


export default Home;


