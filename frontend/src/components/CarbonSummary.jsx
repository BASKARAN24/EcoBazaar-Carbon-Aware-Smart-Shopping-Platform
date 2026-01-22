import React from "react";


const CarbonSummary = ({ cart }) => {
const totalCarbon = cart.reduce((sum, item) => sum + item.carbon, 0);


return (
<div className="bg-green-50 p-4 rounded-2xl shadow mt-6">
<h3 className="text-lg font-semibold">🌍 Carbon Impact Summary</h3>
<p className="mt-2">Total Items: {cart.length}</p>
<p>Total Carbon Footprint: <strong>{totalCarbon.toFixed(2)} kg CO₂</strong></p>
<p className="text-sm text-gray-600 mt-1">
Tip: Choose low-carbon products to reduce your impact.
</p>
</div>
);
};


export default CarbonSummary;