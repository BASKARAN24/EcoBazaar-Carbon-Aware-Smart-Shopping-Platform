import React from "react";


const ProductCard = ({ product, onAdd }) => {
const carbonLabel =
product.carbon <= 1 ? "Low Carbon" : product.carbon <= 3 ? "Medium" : "High";


return (
<div className="bg-white rounded-2xl shadow p-4">
<img src={product.image} alt={product.name} className="rounded-xl mb-3" />
<h2 className="text-xl font-semibold">{product.name}</h2>
<p className="text-gray-600">₹{product.price}</p>
<p className="mt-1 text-sm">
Carbon Footprint: <strong>{product.carbon} kg CO₂</strong>
</p>
<span className="inline-block mt-1 px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
{carbonLabel}
</span>
<button
onClick={() => onAdd(product)}
className="mt-3 w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700"
>
Add to Cart
</button>
</div>
);
};


export default ProductCard;